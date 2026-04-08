import axios from "../api/axios";
import { useState, useEffect } from "react";

export default function Positions() {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get("/allPositions")
      .then((res) => {
        setAllPositions(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("Error fetching positions", err);
        setAllPositions([]);
      });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const qty = Number(stock.qty) || 0;
              const avg = Number(stock.avg) || 0;
              const price = Number(stock.price) || 0;
              const pnl = price * qty - avg * qty;
              const profitClass = pnl >= 0 ? "profit" : "loss";
              const dayClass = String(stock.day || "").startsWith("-")
                ? "loss"
                : "profit";

              return (
                <tr key={stock._id || `${stock.name}-${index}`}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td className={profitClass}>{pnl.toFixed(2)}</td>
                  <td className={dayClass}>{stock.day || "0.00%"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
