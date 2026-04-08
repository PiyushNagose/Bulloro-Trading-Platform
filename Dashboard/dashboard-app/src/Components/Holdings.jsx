import axios from "../api/axios";
import { useState, useEffect } from "react";

import { VerticalBar } from "./VerticalBar";

export default function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("/allHoldings")
      .then((res) => {
        setAllHoldings(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("Error fetching holdings", err);
        setAllHoldings([]);
      });
  }, []);

  const labels = allHoldings.map((holding) => holding.name);
  const totalInvestment = allHoldings.reduce((sum, stock) => {
    return sum + (Number(stock.avg) || 0) * (Number(stock.qty) || 0);
  }, 0);
  const totalCurrentValue = allHoldings.reduce((sum, stock) => {
    return sum + (Number(stock.price) || 0) * (Number(stock.qty) || 0);
  }, 0);
  const totalPnl = totalCurrentValue - totalInvestment;
  const totalPnlPercent =
    totalInvestment > 0 ? (totalPnl / totalInvestment) * 100 : 0;

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => Number(stock.price) || 0),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const qty = Number(stock.qty) || 0;
              const avg = Number(stock.avg) || 0;
              const price = Number(stock.price) || 0;
              const currValue = price * qty;
              const pnl = currValue - avg * qty;
              const profitClass = pnl >= 0 ? "profit" : "loss";
              const dayClass = String(stock.day || "").startsWith("-")
                ? "loss"
                : "profit";

              return (
                <tr key={stock._id || `${stock.name}-${index}`}>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profitClass}>{pnl.toFixed(2)}</td>
                  <td className={profitClass}>{stock.net || "0.00%"}</td>
                  <td className={dayClass}>{stock.day || "0.00%"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{totalCurrentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={totalPnl >= 0 ? "profit" : "loss"}>
            {totalPnl.toFixed(2)} ({totalPnlPercent.toFixed(2)}%)
          </h5>
          <p>P&amp;L</p>
        </div>
      </div>
      <VerticalBar data={data} />
    </>
  );
}
