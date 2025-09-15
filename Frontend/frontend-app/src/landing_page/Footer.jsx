export default function Footer() {
  return (
    <footer className="border mt-5" style={{ backgroundColor: "#FBFBFB" }}>
      <div className="container mt-5">
        <div className="row mb-5">
          <div className="col">
            <a href="#">
              <img
                src="Media/Images/logo.png"
                alt="Bulloro Logo"
                className="footerlogo"
              />
            </a>
            <p className="text-muted">
              © 2023 - 2025, Bulloro Trading Pvt. Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <h5 className="mb-3">Account</h5>
            <a href="#">
              <p>Open a trading account</p>
            </a>
            <a href="#">
              <p>Minor account</p>
            </a>
            <a href="#">
              <p>NRI account</p>
            </a>
            <a href="#">
              <p>Fund transfer</p>
            </a>
            <a href="#">
              <p>Referral program</p>
            </a>
          </div>
          <div className="col">
            <h5 className="mb-3">Support</h5>
            <a href="#">
              <p>Contact us</p>
            </a>
            <a href="#">
              <p>Help Center</p>
            </a>
            <a href="#">
              <p>FAQ</p>
            </a>
            <a href="#">
              <p>Documentation</p>
            </a>
          </div>
          <div className="col">
            <h5 className="mb-3">Company</h5>
            <a href="#">
              <p>About Bulloro</p>
            </a>
            <a href="#">
              <p>Careers</p>
            </a>
            <a href="#">
              <p>Press & Media</p>
            </a>
            <a href="#">
              <p>Our Philosophy</p>
            </a>
          </div>
          <div className="col">
            <h5 className="mb-3">Quick Links</h5>
            <a href="#">
              <p>Markets</p>
            </a>
            <a href="#">
              <p>Pricing</p>
            </a>
            <a href="#">
              <p>Resources</p>
            </a>
            <a href="#">
              <p>Trading Tools</p>
            </a>
          </div>
        </div>
        <div className="text-muted">
          <p>
            Bulloro Trading Pvt. Ltd. is a technology-driven trading platform
            providing secure and efficient trading services. All investments are
            subject to market risks. Read all related documents carefully before
            investing.
          </p>
          <p>
            For any complaints or support, please contact support@bulloro.com or
            visit our Help Center. Your safety and transparency are our top
            priority.
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-evenly mt-4 text-muted">
          <a href="#">
            <p>Terms & Conditions</p>
          </a>
          <a href="#">
            <p>Privacy Policy</p>
          </a>
          <a href="#">
            <p>Risk Disclosure</p>
          </a>
          <a href="#">
            <p>Investor Charter</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
