import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg border p-3">
      <div class="container">
        <form
          class="d-flex align-items-center justify-content-center"
          role="search"
        >
          <Link class="navbar-brand" className="mx-5" to="/">
            <img
              src="Media/Images/logo.svg"
              alt="Logo"
              style={{ width: "20%" }}
            />
          </Link>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-lg-0 mr-5">
              <li class="nav-item mx-3"></li>
              <Link class="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
              <li />
              <li class="nav-item mx-3"></li>
              <Link class="nav-link active" aria-current="page" to="/about">
                About
              </Link>
              <li />
              <li class="nav-item mx-3"></li>
              <Link class="nav-link active" aria-current="page" to="/products">
                Products
              </Link>
              <li />
              <li class="nav-item mx-3"></li>
              <Link class="nav-link active" aria-current="page" to="/pricing">
                Pricing
              </Link>
              <li />
              <li class="nav-item mx-3"></li>
              <Link class="nav-link active" aria-current="page" to="/support">
                Support
              </Link>
              <li />
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
}
