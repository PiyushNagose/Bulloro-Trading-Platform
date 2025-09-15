import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import AuthContext from "./AuthContext";  // ✅ Import AuthContext

export default function Menu() {
  const [selectMenu, setSelectMenu] = useState(0);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  // ✅ Get user + logout from AuthContext
  const { user, logout } = useContext(AuthContext);

  const handelClick = (index) => setSelectMenu(index);
  const profileClick = () => setIsDropDownOpen(!isDropDownOpen);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const getInitials = (username) => {
    if (!username) return "US";
    return username.slice(0, 2).toUpperCase();
  };

  return (
    <div className="menu-container">
      <div>
        <img src="bulloro.png" alt="logo" style={{ width: "7rem" }} />
      </div>

      <div className="menus">
        <ul>
          <li>
            <Link onClick={() => handelClick(0)} to="/">
              <p className={selectMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link onClick={() => handelClick(1)} to="/orders">
              <p className={selectMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link onClick={() => handelClick(2)} to="/holdings">
              <p className={selectMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link onClick={() => handelClick(3)} to="/positions">
              <p className={selectMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link onClick={() => handelClick(4)} to="/funds">
              <p className={selectMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link onClick={() => handelClick(5)} to="/apps">
              <p className={selectMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />

        {/* Profile Section */}
        <div
          className="profile"
          onClick={profileClick}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <div className="avatar">
            {user ? getInitials(user.username) : "GU"}
          </div>
          <p className="username">{user ? user.username : "Guest"}</p>

          {isDropDownOpen && (
            <div
              className="dropdown"
              style={{
                position: "absolute",
                top: "60px",
                right: "0",
                background: "#fff",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                borderRadius: "6px",
                padding: "10px",
                zIndex: 10,
              }}
            >
              {!user ? (
                <>
                  <Link className="dropdown-item" to="/signup">
                    Sign Up
                  </Link>
                  <Link className="dropdown-item" to="/login">
                    Log In
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => {
                    logout(); // ✅ Now uses AuthContext
                    setIsDropDownOpen(false);
                  }}
                  className="dropdown-item"
                >
                  Log Out
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
