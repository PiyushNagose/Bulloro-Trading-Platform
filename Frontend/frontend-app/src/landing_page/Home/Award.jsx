export default function Award() {
  return (
    <div className="container mt-5">
      <br></br>
      <div className="row">
        <div className="col-6 p-5">
          <img src="Media/Images/largestBroker.svg" />
        </div>
        <div className="col-6 mt-3 p-5">
          <h1>Largest stock broker in India</h1>
          <p className="mt-3">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row mt-5 mb-5">
            <div className="col-6">
              <ul>
                <li className="mb-2">Futures and Options</li>
                <li className="mb-2">Commodity derivatives</li>
                <li className="mb-2">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="mb-2">Stocks & IPO's</li>
                <li className="mb-2">Direct mutual funds</li>
                <li className="mb-2">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="Media/Images/pressLogos.png" alt="Press Logo" style={{width: "90%"}} />
        </div>
      </div>
    </div>
  );
}
