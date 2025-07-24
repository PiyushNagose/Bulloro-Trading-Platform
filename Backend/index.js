require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { HoldingsModel } = require("./Models/HoldingsModel");
const { PositionsModel } = require("./Models/PositionsModel");
const { OrdersModel } = require("./Models/OrdersModel");
const UserModel = require("./Models/UserModel");
const { CreateSecretToken } = require("./Util/CreateSecretToken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");

const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_URL;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173", // ✅ Your frontend's exact origin
    credentials: true, // ✅ Allow cookies/credentials
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

main()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(URL);
}

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrders/buy", async (req, res) => {
  const { name, qty, price, mode } = req.body;
  if (!name || !qty || !price) {
    return res.status(400).send("Missing required fields");
  }

  try {
    const currentPrice = price + (Math.random() * 10 - 5);
    const avg = price;
    const net = (((currentPrice - avg) / avg) * 100).toFixed(2) + "%";
    const day = (Math.random() * 4 - 1).toFixed(2) + "%";

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    const newHolding = new HoldingsModel({
      name,
      qty,
      avg,
      price: currentPrice,
      net,
      day,
    });

    await newHolding.save();
    res.send("order saved and reflected into the holdings!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occurs while placing the order");
  }
});

app.post("/newOrders/sell", async (req, res) => {
  const { name, qty, price, mode } = req.body;
  if (!name || !qty || !price) {
    return res.status(400).send("Missing required fields");
  }
  try {
    let newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    let holdings = await HoldingsModel.find({ name }).sort({ _id: 1 });

    let remainingQty = qty;

    for (let holding of holdings) {
      if (remainingQty === 0) {
        break;
      }

      if (holding.qty <= remainingQty) {
        remainingQty -= holding.qty;

        await HoldingsModel.deleteOne({ _id: holding._id });
      } else {
        holding.qty -= remainingQty;

        const newPrice = price + (Math.random() * 10 - 5); // simulate LTP
        holding.price = newPrice;
        holding.net =
          (((newPrice - holding.avg) / holding.avg) * 100).toFixed(2) + "%";
        holding.day = (Math.random() * 4 - 1).toFixed(2) + "%";
        await holding.save();
        remainingQty = 0;
      }
    }

    if (remainingQty > 0) {
      return res.status(400).send("Not enough quantity avaliable to sell");
    }

    res.send("Order is sold and holdings are updated!");
  } catch (err) {
    console.log(err);
    res.status(500).send("There is some error in selling order");
  }
});

app.get("/getOrders", async (req, res) => {
  try {
    const orders = await OrdersModel.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error while fetching orders");
  }
});

app.post("/signup", async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await UserModel.create({
      email,
      password,
      username,
      createdAt,
    });
    const token = CreateSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
});

app.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    // 3. Compare password
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    // 4. Create and send token
    const token = CreateSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // change to true in production with HTTPS
      sameSite: "Lax",
    });

    // 5. Send response
    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });

    next(); // only if you're chaining middlewares
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening...... to ${PORT}`);
});
