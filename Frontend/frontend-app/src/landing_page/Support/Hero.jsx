export default function Hero() {
  return (
    <div
      className="container-fluid SupportColor"
      style={{ backgroundColor: "rgb(56, 126, 209)", color: "white" }}
    >
      <div className="p-4 d-flex justify-content-around">
        <div>
          <h4>Bulloro Support Portal</h4>
        </div>

        <div>
          <a href="#" style={{ color: "white" }}>
            Tickets
          </a>
        </div>
      </div>

      <div className="p-5 row" style={{ marginLeft: "14rem" }}>
        <div className="col p-5" style={{ lineHeight: "2.5" }}>
          <h2 className="fs-3 fw-normal mb-3">
            Search for an answer or browse help topics to create a support
            ticket
          </h2>
          <input
            placeholder="Eg: How do I activate F&O, why is my order rejected?"
            type="text"
            style={{
              width: "90%",
              padding: "0.75rem",
              border: "none",
              borderRadius: "0.5rem",
              marginBottom: "0.75rem",
            }}
          />
          <br />
          <a href="#" style={{ color: "white" }}>
            Track account opening
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="#" style={{ color: "white" }}>
            Track segment activation
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="#" style={{ color: "white" }}>
            Intraday orders
          </a>
          <br />
          <a href="#" style={{ color: "white" }}>
            Margins
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="#" style={{ color: "white" }}>
            Platform user guide
          </a>
        </div>

        <div className="col p-5" style={{ lineHeight: "2.5" }}>
          <h2 className="fs-3 fw-semibold">Featured Articles</h2>
          <ol>
            <li>
              <a href="#" style={{ color: "white" }}>
                Current Takeovers and Delistings - 2025
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "white" }}>
                Latest Intraday Margins & Leverages
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
