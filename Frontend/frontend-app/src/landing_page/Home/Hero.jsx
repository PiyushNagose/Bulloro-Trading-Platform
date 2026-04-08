const dashboardBaseUrl =
  import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174";

export default function Hero() {
  const handleSignUp = () => {
    window.location.assign(`${dashboardBaseUrl}/signup`);
  };

  return (
    <div className="container">
      <div className="row text-center">
        <img
          src="Media/Images/homeHero.png"
          alt="Hero Image"
          style={{ transform: "scale(0.7)" }}
        />

        <h1>Invest Smarter with Bulloro</h1>
        <p className="fs-5 mt-4 text-muted">
          Bulloro is your all-in-one platform to trade and invest in stocks,
          derivatives, mutual funds, ETFs, bonds, and more, built for modern
          traders.
        </p>
        <button
          type="button"
          className="btn btn-primary p-2 mt-4 fs-5 fw-semibold mb-5"
          style={{
            width: "13%",
            margin: "0 auto",
            backgroundColor: "#e63946",
            border: "none",
            color: "#fff",
          }}
          onClick={handleSignUp}
        >
          Sign Up For Free
        </button>
      </div>
    </div>
  );
}
