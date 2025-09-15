export default function Hero() {
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
          derivatives, mutual funds, ETFs, bonds, and more — built for modern
          traders.
        </p>
        <button
          className="btn p-2 mt-4 fs-5 fw-semibold mb-5"
          style={{
            width: "13%",
            margin: "0 auto",
            backgroundColor: "#e63946",
            border: "none",
            color: "#fff",
          }}
        >
          Sign Up For Free
        </button>
      </div>
    </div>
  );
}
