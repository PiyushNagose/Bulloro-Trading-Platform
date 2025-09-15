export default function Education() {
  return (
    <div className="container mt-5">
      <br />
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="Media/Images/education.svg"
            alt="Education Resources"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-6 mt-3 p-5">
          <h1 className="mb-5">Learn and Grow with Bulloro</h1>
          <p className="mb-3">
            Bulloro Academy provides free and open educational resources
            covering everything from stock market basics to advanced trading
            strategies.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Explore Bulloro Academy <i className="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mb-3 mt-5">
            Bulloro Community is a vibrant platform where traders and investors
            can ask questions, share insights, and discuss market strategies.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Join Bulloro Community <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
