import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "../api/axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

export default function SellActionWindow({ uid }) {
  const [stockQuantity, setStockQuantity] = useState("1");
  const [stockPrice, setStockPrice] = useState("0.0");

  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = () => {
    const qty = parseFloat(stockQuantity);
    const price = parseFloat(stockPrice);

    if (isNaN(qty) || qty <= 0 || isNaN(price) || price <= 0) {
      alert("Please enter valid quantity and price.");
      return;
    }
    axios
      .post("/newOrders/sell", {
        name: uid,
        qty,
        price,
        mode: "SELL",
      })
      .then(() => {
        closeSellWindow();
      })
      .catch((err) => {
        console.error("Error placing order", err);
        alert("Error placing order");
      });
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
