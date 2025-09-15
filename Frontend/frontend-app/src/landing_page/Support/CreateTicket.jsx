export default function CreateTicket() {
  return (
    <div className="container mt-4">
      <div className="row p-5 TicketColor">
        <h1 className="fs-2 mx-4 mb-3">
          Create a support ticket by selecting a relevant topic
        </h1>

        <div className="col-4 p-5">
          <h5 className="mb-5">
            <i className="fa-solid fa-circle-plus"></i> Account
          </h5>
          <a href="#" className="text-muted">
            <p>Open a Bulloro account</p>
          </a>
          <a href="#">
            <p> Minor account</p>
          </a>
          <a href="#">
            <p>NRI account</p>
          </a>
          <a href="#">
            <p>Commodity trading</p>
          </a>
          <a href="#">
            <p>Fund transfer</p>
          </a>
          <a href="#">
            <p>Margin trading</p>
          </a>
          <a href="#">
            <p>Referral program</p>
          </a>
        </div>

        <div className="col-4 p-5">
          <h5 className="mb-5">
            <i className="fa-solid fa-user"></i> Profile & Verification
          </h5>
          <a href="#" className="text-muted">
            <p>KYC verification</p>
          </a>
          <a href="#">
            <p>Update personal info</p>
          </a>
          <a href="#">
            <p>Change password</p>
          </a>
          <a href="#">
            <p>Two-factor authentication</p>
          </a>
          <a href="#">
            <p>Linked accounts</p>
          </a>
        </div>

        <div className="col-4 p-5">
          <h5 className="mb-5">
            <i className="fa-solid fa-chart-simple"></i> Trading & Investments
          </h5>
          <a href="#" className="text-muted">
            <p>Equity trades</p>
          </a>
          <a href="#">
            <p>Derivatives (F&O)</p>
          </a>
          <a href="#">
            <p>Mutual funds</p>
          </a>
          <a href="#">
            <p>Bonds & ETFs</p>
          </a>
          <a href="#">
            <p>Commodity trading</p>
          </a>
        </div>
      </div>

      <div className="row p-5 TicketColor">
        <div className="col-4 p-5">
          <h5 className="mb-5">
            <i className="fa-solid fa-money-check-dollar"></i> Payments
          </h5>
          <a href="#" className="text-muted">
            <p>Add funds</p>
          </a>
          <a href="#">
            <p>Withdraw funds</p>
          </a>
          <a href="#">
            <p>Transaction history</p>
          </a>
        </div>

        <div className="col-4 p-5">
          <h5 className="mb-5">
            <i className="fa-solid fa-computer"></i> Platform & Tools
          </h5>
          <a href="#" className="text-muted">
            <p>Bulloro Web</p>
          </a>
          <a href="#">
            <p>Bulloro Mobile App</p>
          </a>
          <a href="#">
            <p>API & Integrations</p>
          </a>
        </div>

        <div className="col-4 p-5">
          <h5 className="mb-5">
            <i className="fa-solid fa-coins"></i> Others
          </h5>
          <a href="#" className="text-muted">
            <p>Promotions & offers</p>
          </a>
          <a href="#">
            <p>Refer a friend</p>
          </a>
          <a href="#">
            <p>FAQs</p>
          </a>
        </div>
      </div>
    </div>
  );
}
