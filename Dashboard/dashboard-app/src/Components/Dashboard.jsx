import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import App from "./App";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username) {
      setUser(storedUser);
    }
  }, []);

  const isLoggedIn = !!user;

  return (
    <GeneralContextProvider>
      <div className="dashboard-container">
        <WatchList />

        <div className="content">
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/" element={<Summary />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/holdings" element={<Holdings />} />
                <Route path="/positions" element={<Positions />} />
                <Route path="/funds" element={<Funds />} />
                <Route path="/apps" element={<App />} />
                {/* ✅ redirect unknown routes to dashboard */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            ) : (
              <Route
                path="*"
                element={
                  <div className="text-center mt-6 text-lg text-gray-600">
                    Please log in to access dashboard features.
                  </div>
                }
              />
            )}
          </Routes>
        </div>
      </div>
    </GeneralContextProvider>
  );
}
