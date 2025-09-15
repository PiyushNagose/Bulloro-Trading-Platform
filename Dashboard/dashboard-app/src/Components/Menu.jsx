import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function Menu() {
  const [selectMenu, setSelectMenu] = useState(0);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);

  const handelClick = (index) => setSelectMenu(index);
  const profileClick = () => setIsDropDownOpen(!isDropDownOpen);

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
              <p className={selectMenu === 0 ? "menu selected" : "menu"}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link onClick={() => handelClick(1)} to="/orders">
              <p className={selectMenu === 1 ? "menu selected" : "menu"}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link onClick={() => handelClick(2)} to="/holdings">
              <p className={selectMenu === 2 ? "menu selected" : "menu"}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link onClick={() => handelClick(3)} to="/positions">
              <p className={selectMenu === 3 ? "menu selected" : "menu"}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link onClick={() => handelClick(4)} to="/funds">
              <p className={selectMenu === 4 ? "menu selected" : "menu"}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link onClick={() => handelClick(5)} to="/apps">
              <p className={selectMenu === 5 ? "menu selected" : "menu"}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />

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
            <div className="dropdown">
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
                <button onClick={logout} className="dropdown-item">
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
