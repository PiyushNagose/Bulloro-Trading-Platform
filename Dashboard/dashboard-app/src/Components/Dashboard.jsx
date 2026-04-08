import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import App from "./App";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import axios from "../api/axios";
import { clearStoredUser, getStoredUser, setStoredUser } from "../utils/auth";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const syncAuth = async () => {
      const storedUser = getStoredUser();

      if (storedUser?.username && isMounted) {
        setIsLoggedIn(true);
      }

      try {
        const res = await axios.get("/auth/me");

        if (!isMounted) {
          return;
        }

        setStoredUser(res.data.user);
        setIsLoggedIn(true);
      } catch {
        if (!isMounted) {
          return;
        }

        clearStoredUser();
        setIsLoggedIn(false);
      } finally {
        if (isMounted) {
          setIsCheckingAuth(false);
        }
      }
    };

    syncAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <GeneralContextProvider>
      <div className="dashboard-container">
        <WatchList />

        <div className="content">
          <Routes>
            {isCheckingAuth ? (
              <Route
                path="*"
                element={<div className="text-center mt-6">Checking session...</div>}
              />
            ) : isLoggedIn ? (
              <>
                <Route path="/" element={<Summary />} />
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
