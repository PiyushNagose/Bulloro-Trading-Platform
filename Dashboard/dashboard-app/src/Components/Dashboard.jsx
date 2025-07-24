import { Route, Routes } from "react-router-dom";

import App from "./App";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <GeneralContextProvider>
      <div className="dashboard-container">
        <WatchList />

        <div className="content">
          <Routes>
            {isLoggedIn ? (
              <>
                <Route exact path="/" element={<Summary />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/holdings" element={<Holdings />} />
                <Route path="/positions" element={<Positions />} />
                <Route path="/funds" element={<Funds />} />
                <Route path="/apps" element={<App />} />
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
