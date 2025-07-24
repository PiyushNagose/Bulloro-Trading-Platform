export default function Hero() {
  return (
    <div className="container border-bottom">
      <div className="row text-center p-5">
        <h1>Pricing</h1>
        <p className="fs-5 mt-4 text-muted fw-normal">
          Free equity investments and flat <span>&#8377;</span>20 traday and F&O
          trades
        </p>
      </div>
      <div className="row text-center border-top p-5 mt-5">
        <div className="col-4">
          <img src="Media/Images/pricingEquity.svg" style={{ width: "70%" }} />
          <h1 className="fs-2 mt-4">Free equity delivery</h1>
          <p className="text-muted mt-4">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="Media/Images/other-trades.svg" style={{ width: "70%" }} />
          <h1 className="fs-2 mt-4">Intraday and F&O trades</h1>
          <p className="text-muted mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="Media/Images/pricingEquity.svg" style={{ width: "70%" }} />
          <h1 className="fs-2 mt-4">Free direct MF</h1>
          <p className="text-muted mt-4">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
