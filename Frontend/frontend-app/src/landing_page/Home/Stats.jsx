export default function Stats() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col p-5">
          <h1 className="fs-1 mb-5">Trade & Invest with Confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted mt-3">
            Thousands of traders trust Bulloro to manage their investments
            across stocks, ETFs, mutual funds, and more, benefiting from our
            technology-driven platform.
          </p>
          <h2 className="fs-4 mt-5">No gimmicks, only transparency</h2>
          <p className="text-muted mt-3">
            Bulloro offers simple and clear pricing, zero hidden charges, and no
            unnecessary notifications. Tools designed for your pace.
          </p>
          <h2 className="fs-4 mt-5">The Bulloro ecosystem</h2>
          <p className="text-muted mt-3">
            Not just a trading app, but a full ecosystem of investing solutions,
            educational content, and community-driven features to empower you.
          </p>
          <h2 className="fs-4 mt-5">Grow your wealth smarter</h2>
          <p className="text-muted mt-3">
            Bulloro provides actionable insights and intuitive tools to help you
            make informed financial decisions and grow your money effectively.
          </p>
        </div>
        <div className="col p-5">
          <img
            src="Media/Images/ecosystem.png"
            style={{ width: "100%" }}
            alt="Bulloro Ecosystem"
          />
          <div className="mt-4 mx-5">
            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              Explore Bulloro products{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" className="mx-3" style={{ textDecoration: "none" }}>
              Try Bulloro demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
