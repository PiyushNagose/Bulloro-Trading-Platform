import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LineChart } from "./LineChart";
import moment from "moment";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/getOrders")
      .then((res) => {
        console.log("orders = ", res.data);
        setOrders(res.data);
      })
      .catch((err) => console.error("Error fetching orders", err));
  }, []);

  const buyOrders = orders.filter((order) => order.mode === "BUY");
  const sellOrders = orders.filter((order) => order.mode === "SELL");

  const labels = orders.map((order) =>
    moment(order.createdAt).format("MMM D, h:mm A")
  );

  const buyPrices = orders.map((order) =>
    order.mode === "BUY" ? order.price : null
  );

  const sellPrices = orders.map((order) =>
    order.mode === "SELL" ? order.price : null
  );

  const data = {
    labels,
    datasets: [
      {
        label: "BUY",
        data: buyPrices,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        spanGaps: true,
      },
      {
        label: "SELL",
        data: sellPrices,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        spanGaps: true,
      },
    ],
  };

  return (
    <div className="orders">
      <h3 className="title">Orders ({orders.length})</h3>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                const isBuy = order.mode === "BUY";
                const modeClass = isBuy ? "profit" : "loss";

                return (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price.toFixed(2)}</td>
                    <td className={modeClass}>{order.mode}</td>
                    <td>
                      {order.createdAt
                        ? new Date(order.createdAt).toLocaleString()
                        : "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <LineChart data={data} />
    </div>
  );
}
