export default function Award() {
  return (
    <div className="container mt-5">
      <br />
      <div className="row">
        <div className="col-6 p-5">
          <img src="Media/Images/largestBroker.svg" alt="Award" />
        </div>
        <div className="col-6 mt-3 p-5">
          <h1>Leading the Way in Modern Trading</h1>
          <p className="mt-3">
            Thousands of Bulloro clients trade and invest every day across
            multiple asset classes, benefiting from our technology-driven
            platform:
          </p>
          <div className="row mt-5 mb-5">
            <div className="col-6">
              <ul>
                <li className="mb-2">Stocks and IPOs</li>
                <li className="mb-2">Futures & Options</li>
                <li className="mb-2">Commodity derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="mb-2">Mutual Funds</li>
                <li className="mb-2">ETFs</li>
                <li className="mb-2">Bonds and Government Securities</li>
              </ul>
            </div>
          </div>
          <img
            src="Media/Images/pressLogos.png"
            alt="Press Logo"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}
