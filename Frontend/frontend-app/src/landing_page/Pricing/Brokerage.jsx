export default function Brokerage() {
  return (
    <div className="container border-top my-5">
      <div className="row p-5">
        <div className="col-6">
          <h1 className="fs-5 mx-4 mb-5" style={{color: "#387ED1"}}>Brokerage calculator</h1>
          <ul style={{lineHeight: "2.3", fontWeight: "350"}}>
            <li>
              Calculate brokerage, taxes, and other charges across segments like
              Equity, F&O, Commodity, and Currency.
            </li>
            <li>
              Provides a detailed breakdown of all charges including STT, GST,
              SEBI charges, and exchange fees.
            </li>
            <li>
              No brokerage is charged on equity delivery trades — it's
              absolutely free.
            </li>
            <li>
              For intraday and F&O trades, brokerage is capped at ₹20 per
              executed order.
            </li>
            <li>
              Displays net profit/loss and breakeven point after considering all
              trading costs.
            </li>
            <li>
              User-friendly interface helps traders make cost-effective and
              informed decisions.
            </li>
          </ul>
        </div>
        <div className="col-6">
          <h1 className="fs-5 text-end " style={{color: "#387ED1"}}>List of charges</h1>
        </div>
      </div>
    </div>
  );
}
