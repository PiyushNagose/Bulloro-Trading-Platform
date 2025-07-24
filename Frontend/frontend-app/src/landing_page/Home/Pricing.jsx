export default function Pricing() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 p-5">
          <h1 className="fs-1 mb-4">Unbeatable pricing</h1>
          <p className="mb-3 text-muted">
            We pioneered the concept of discount broking and<br></br> price
            transparency in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See Pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center p-5">
          <img
            src="Media/Images/pricing-eq.svg"
            alt="Pricing Image"
            style={{ width: "20%" }}
          />
          <span>
            <span style={{ fontSize: "12px" }}>Free account opening</span>
          </span>

          <img
            src="Media/Images/pricing-eq.svg"
            alt="Pricing Image"
            style={{ width: "20%" }}
          />
          <span style={{ fontSize: "12px" }}>
            Free equity delivery and direct mutual funds
          </span>
          <img
            src="Media/Images/other-trades.svg"
            alt="Pricing Image"
            style={{ width: "20%" }}
          />
          <span style={{ fontSize: "12px" }}>Intraday and F&O</span>
        </div>
      </div>
    </div>
  );
}
