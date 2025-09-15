export default function SignUp() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 p-5 border rounded shadow-sm">
          <h1 className="text-center mb-4">Create your Bulloro Account</h1>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Piyush Nagose"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 fw-semibold mt-3"
            >
              Sign Up For Free
            </button>
          </form>
          <p className="text-center text-muted mt-3">
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
