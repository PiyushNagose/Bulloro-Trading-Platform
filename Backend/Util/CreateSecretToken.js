require("dotenv").config();
const jwt = require("jsonwebtoken");

const CreateSecretToken = (id) => {
  if (!process.env.TOKEN_KEY) {
    throw new Error("TOKEN_KEY is not configured");
  }

  return jwt.sign({ id }, process.env.TOKEN_KEY || "default_secret_key", {
    expiresIn: "3d",
  });
};

module.exports = { CreateSecretToken };
