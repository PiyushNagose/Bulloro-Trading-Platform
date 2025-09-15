export default function Universe() {
  return (
    <div className="container text-center mt-5">
      <h2>The Bulloro Ecosystem</h2>
      <p className="mt-4 text-muted">
        Extend your trading and investment experience with our partner platforms
      </p>

      <div className="row universeImg p-3 text-center">
        <div className="col p-5 mt-4">
          <img
            src="Media/Images/bulloroFundhouse.png"
            alt="Bulloro Fundhouse"
          />
          <a href="#">
            <p>
              Our asset management venture creating simple, transparent index
              funds to help you reach your financial goals.
            </p>
          </a>

          <img
            src="Media/Images/sensibullLogo.svg"
            alt="Sensibull"
            style={{ marginTop: "1rem" }}
          />
          <a href="#">
            <p>
              Options trading platform for creating strategies, analyzing
              positions, and tracking market data like open interest and
              institutional activity.
            </p>
          </a>
        </div>

        <div className="col p-5 mb-3">
          <img src="Media/Images/tijori.svg" alt="Tijori" />
          <a href="#">
            <p>
              Investment research platform providing deep insights on stocks,
              sectors, and market trends.
            </p>
          </a>

          <img src="Media/Images/streak-logo.png" alt="Streak" />
          <a href="#">
            <p>
              Systematic trading platform allowing you to create and backtest
              strategies without any coding.
            </p>
          </a>
        </div>

        <div className="col p-4 mt-4">
          <img src="Media/Images/smallcaseLogo.png" alt="Smallcase" />
          <a href="#">
            <p>
              Thematic investing platform for diversified baskets of stocks and
              ETFs.
            </p>
          </a>

          <img src="Media/Images/dittoLogo.png" alt="Ditto" />
          <a href="#">
            <p>
              Personalized financial advice on insurance and investments,
              without spam or mis-selling.
            </p>
          </a>
        </div>
      </div>

      <button
        className="btn btn-primary p-2 fs-5 fw-semibold mb-5"
        style={{ width: "13%", margin: "0 auto" }}
      >
        Sign Up For Free
      </button>
    </div>
  );
}
