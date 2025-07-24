export default function Education() {
  return (
    <div className="container mt-5">
      <br></br>
      <div className="row">
        <div className="col-6 p-5">
          <img src="Media/Images/education.svg" alt="Education Index" style={{width: "70%"}}/>
        </div>
        <div className="col-6 mt-3 p-5">
          <h1 className="mb-5">Free and open market education</h1>
          <p className="mb-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mb-3 mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
