export default function Hero() {
  return (
    <div className="container">
      <div className="row text-center ">
        <img
          src="Media/Images/homeHero.png"
          alt="Hero Image"
          style={{ transform: "scale(0.7)" }}
        />

        <h1>Invest in everything</h1>
        <p className="fs-5 mt-4 text-muted">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="btn btn-primary p-2 mt-4 fs-5 fw-semibold mb-5"
          style={{ width: "13%", margin: "0 auto" }}
        >
          Sign Up For Free
        </button>
      </div>
    </div>
  );
}
