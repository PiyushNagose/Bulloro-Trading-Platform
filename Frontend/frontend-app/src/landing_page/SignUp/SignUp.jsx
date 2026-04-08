const dashboardBaseUrl =
  import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174";

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.assign(`${dashboardBaseUrl}/signup`);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 p-5 border rounded shadow-sm">
          <h1 className="text-center mb-4">Create your Bulloro Account</h1>
          <p className="text-center text-muted mb-4">
            Account creation is handled in the secure dashboard app.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Piyush Nagose"
                disabled
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="you@example.com"
                disabled
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="********"
                disabled
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 fw-semibold mt-3"
            >
              Continue To Secure Sign Up
            </button>
          </form>
          <p className="text-center text-muted mt-3">
            Already have an account?{" "}
            <a href={`${dashboardBaseUrl}/login`}>Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
