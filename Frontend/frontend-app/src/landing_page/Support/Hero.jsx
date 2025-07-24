export default function Hero() {
  return (
    <div
      className="container-fluid SupportColor"
      style={{ backgroundColor: "rgb(56, 126, 209)", color: "white" }}
    >
      <div className="p-4 d-flex justify-content-around">
        <div>
          <h4>Support Portal</h4>
        </div>

        <div>
          <a href="#">Train Tickets</a>
        </div>
      </div>
      <div className="p-5 row" style={{ marginLeft: "14rem" }}>
        <div className="col p-5 " style={{ lineHeight: "2.5" }}>
          <h2 className="fs-3 fw-normal mb-3">
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input
            placeholder="Eg: How do i active F&O, why is my order getting rejected."
            type="text"
            style={{
              width: "90%",
              padding: "0.75rem",
              border: "none",
              borderRadius: "0.5rem",
              marginBottom: "0.75rem",
            }}
          />
          <br></br>
          <a href="#">Track account opening</a>
          &nbsp; &nbsp;&nbsp;
          <a href="#">Track segment activation</a>
          &nbsp; &nbsp;&nbsp;
          <a href="#">Intraday</a>
          <br></br>
          <a href="#">Margins</a>
          &nbsp; &nbsp;&nbsp;
          <a href="#">Kite user manual</a>
        </div>

        <div className="col p-5" style={{ lineHeight: "2.5" }}>
          <h2 className="fs-3 fw-semibold">Featured</h2>
          <ol>
            <li>
              <a href="#">Current Takeovers and Delesting - January 2024</a>
            </li>
            <li>
              <a href="#">Latest Intraday Leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
