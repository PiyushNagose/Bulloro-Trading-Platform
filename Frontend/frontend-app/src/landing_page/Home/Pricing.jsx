export default function Pricing() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 p-5">
          <h1 className="fs-1 mb-4">Transparent & Competitive Pricing</h1>
          <p className="mb-3 text-muted">
            Bulloro offers simple, transparent pricing for all traders. No
            hidden charges, flat fees, and zero surprises — invest with
            confidence.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See Pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-6 d-flex flex-column justify-content-center p-5">
          <div className="d-flex align-items-center mb-3">
            <img
              src="Media/Images/pricing-eq.svg"
              alt="Pricing Icon"
              style={{ width: "20%", marginRight: "10px" }}
            />
            <span style={{ fontSize: "14px" }}>Free account opening</span>
          </div>
          <div className="d-flex align-items-center mb-3">
            <img
              src="Media/Images/pricing-eq.svg"
              alt="Pricing Icon"
              style={{ width: "20%", marginRight: "10px" }}
            />
            <span style={{ fontSize: "14px" }}>
              Free equity delivery & direct mutual funds
            </span>
          </div>
          <div className="d-flex align-items-center">
            <img
              src="Media/Images/other-trades.svg"
              alt="Pricing Icon"
              style={{ width: "20%", marginRight: "10px" }}
            />
            <span style={{ fontSize: "14px" }}>Intraday & F&O trades</span>
          </div>
        </div>
      </div>
    </div>
  );
}
