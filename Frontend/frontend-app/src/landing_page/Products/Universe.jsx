export default function Universe() {
  return (
    <div className="conatiner text-center mt-5">
      <h2>The Zerodha Universe</h2>
      <p className="mt-4">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row universeImg p-3 text-center">
        <div className="col p-5 mt-4">
          <img src="Media/Images/zerodhafundhouse (1).png" />
          <a href="#">
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </a>
          <img
            src="Media/Images/sensibullLogo.svg"
            style={{ marginTop: "1rem" }}
          />
          <a href="#">
            <p>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </a>
        </div>
        <div className="col p-5 mb-3">
          <img src="Media/Images/tijori.svg" />
          <a href="#">
            <p>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </a>
          <img src="Media/Images/streak-logo.png" />
          <a href="#">
            <p>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </a>
        </div>
        <div className="col p-4 mt-4">
          <img src="Media/Images/smallcaseLogo.png" />
          <a href="#">
            <p>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </a>
          <img src="Media/Images/dittoLogo.png" />
          <a href="#">
            <p>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
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
