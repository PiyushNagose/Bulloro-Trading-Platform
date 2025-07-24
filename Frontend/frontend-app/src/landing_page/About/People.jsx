export default function People() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">People</h1>
      <div className="row p-5">
        <div className="col p-2 text-center">
          <img
            src="Media/Images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "45%" }}
          />
          <h4 className="my-3">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col mt-4 text-muted p-2">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}
