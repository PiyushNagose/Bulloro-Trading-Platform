import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg border p-3">
      <div className="container">
        <div
          className="d-flex align-items-center justify-content-center"
          role="navigation"
        >
          <Link className="navbar-brand mx-5" to="/">
            <img src="Media/Images/logo.png" alt="Logo" className="logo" />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0 mr-5">
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
