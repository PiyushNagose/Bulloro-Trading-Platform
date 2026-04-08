require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { HoldingsModel } = require("./Models/HoldingsModel");
const { PositionsModel } = require("./Models/PositionsModel");
const { OrdersModel } = require("./Models/OrdersModel");
const UserModel = require("./Models/UserModel");
const { CreateSecretToken } = require("./Util/CreateSecretToken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_URL;
const NODE_ENV = process.env.NODE_ENV || "development";

const app = express();

const allowedOrigins = (process.env.CLIENT_ORIGINS ||
  [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://bulloro-frontend.onrender.com",
    "https://bulloro-trading-platform.onrender.com",
  ].join(","))
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const cookieOptions = {
  httpOnly: true,
  sameSite: NODE_ENV === "production" ? "none" : "lax",
  secure: NODE_ENV === "production",
  maxAge: 3 * 24 * 60 * 60 * 1000,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS origin is not allowed"));
    },
    credentials: true,
  })
);
app.use(cookieParser());

connectToDatabase()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => {
    console.log(err);
  });

async function connectToDatabase() {
  if (!URL) {
    throw new Error("MONGO_URL is not configured");
  }

  await mongoose.connect(URL);
}

const calculateMetrics = (price, avg) => {
  const currentPrice = Number((price + (Math.random() * 10 - 5)).toFixed(2));
  const net = `${(((currentPrice - avg) / avg) * 100).toFixed(2)}%`;
  const day = `${(Math.random() * 4 - 1).toFixed(2)}%`;

  return {
    currentPrice,
    net,
    day,
  };
};

const normalizeOrderInput = (payload = {}) => {
  const name = String(payload.name || "")
    .trim()
    .toUpperCase();
  const qty = Number(payload.qty);
  const price = Number(payload.price);
  const mode = String(payload.mode || "")
    .trim()
    .toUpperCase();

  return { name, qty, price, mode };
};

const validateOrderInput = ({ name, qty, price, mode }) => {
  if (!name || !Number.isFinite(qty) || qty <= 0 || !Number.isFinite(price) || price <= 0) {
    return "Name, qty and price must be valid values";
  }

  if (!["BUY", "SELL"].includes(mode)) {
    return "Mode must be BUY or SELL";
  }

  return null;
};

const getSafeUser = (user) => ({
  _id: user._id,
  username: user.username,
  email: user.email,
  createdAt: user.createdAt,
});

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await UserModel.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired session" });
  }
};

app.get("/", (req, res) => {
  res.json({
    message: "Backend is running",
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

app.get("/auth/me", authenticateUser, (req, res) => {
  res.status(200).json({
    success: true,
    user: getSafeUser(req.user),
  });
});

app.post("/logout", (req, res) => {
  res.clearCookie("token", cookieOptions);
  res.status(200).json({ success: true, message: "Logged out successfully" });
});

app.get("/allHoldings", authenticateUser, async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({ userId: req.user._id }).sort({
      name: 1,
    });
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", authenticateUser, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({ userId: req.user._id }).sort({
      name: 1,
    });
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch positions" });
  }
});

app.post("/newOrders/buy", authenticateUser, async (req, res) => {
  const orderInput = normalizeOrderInput(req.body);
  const validationError = validateOrderInput(orderInput);

  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  try {
    const userId = req.user._id;
    const { name, qty, price, mode } = orderInput;
    const existingHolding = await HoldingsModel.findOne({ userId, name });

    if (existingHolding) {
      const totalQty = existingHolding.qty + qty;
      const weightedAverage =
        (existingHolding.avg * existingHolding.qty + price * qty) / totalQty;
      const { currentPrice, net, day } = calculateMetrics(price, weightedAverage);

      existingHolding.qty = Number(totalQty.toFixed(2));
      existingHolding.avg = Number(weightedAverage.toFixed(2));
      existingHolding.price = currentPrice;
      existingHolding.net = net;
      existingHolding.day = day;
      await existingHolding.save();
    } else {
      const { currentPrice, net, day } = calculateMetrics(price, price);
      const newHolding = new HoldingsModel({
        userId,
        name,
        qty,
        avg: price,
        price: currentPrice,
        net,
        day,
      });

      await newHolding.save();
    }

    const newOrder = new OrdersModel({ userId, name, qty, price, mode });
    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order saved and reflected in holdings",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error occurred while placing the order" });
  }
});

app.post("/newOrders/sell", authenticateUser, async (req, res) => {
  const orderInput = normalizeOrderInput(req.body);
  const validationError = validateOrderInput(orderInput);

  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  try {
    const userId = req.user._id;
    const { name, qty, price, mode } = orderInput;
    const holding = await HoldingsModel.findOne({ userId, name });

    if (!holding) {
      return res.status(404).json({ message: "Holding not found for this stock" });
    }

    if (holding.qty < qty) {
      return res.status(400).json({ message: "Not enough quantity available to sell" });
    }

    if (holding.qty === qty) {
      await HoldingsModel.deleteOne({ _id: holding._id });
    } else {
      holding.qty = Number((holding.qty - qty).toFixed(2));

      const { currentPrice, net, day } = calculateMetrics(price, holding.avg);
      holding.price = currentPrice;
      holding.net = net;
      holding.day = day;
      await holding.save();
    }

    const newOrder = new OrdersModel({ userId, name, qty, price, mode });
    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order sold and holdings updated",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "There was an error while selling the order" });
  }
});

app.get("/getOrders", authenticateUser, async (req, res) => {
  try {
    const orders = await OrdersModel.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error while fetching orders");
  }
});

app.post("/signup", async (req, res, next) => {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");
    const username = String(req.body.username || "").trim();
    const createdAt = req.body.createdAt;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = await UserModel.create({
      email,
      password,
      username,
      createdAt,
    });
    const token = CreateSecretToken(user._id);
    res.cookie("token", token, cookieOptions);

    res
      .status(201)
      .json({
        message: "User signed up successfully",
        success: true,
        user: getSafeUser(user),
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during signup" });
  }
});

app.post("/login", async (req, res, next) => {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const token = CreateSecretToken(user._id);
    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: getSafeUser(user),
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

app.use((err, req, res, next) => {
  console.error(err);

  if (res.headersSent) {
    return next(err);
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }

  if (err.code === 11000) {
    return res.status(409).json({ message: "Duplicate value detected" });
  }

  return res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Listening...... to ${PORT}`);
});
