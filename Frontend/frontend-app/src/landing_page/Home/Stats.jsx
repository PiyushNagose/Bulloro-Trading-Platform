export default function Stats() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col p-5">
          <h1 className="fs-1 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted mt-3">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h2 className="fs-4 mt-5">No spam or gimmicks</h2>
          <p className="text-muted mt-3">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h2 className="fs-4 mt-5">The Zerodha universe</h2>
          <p className="text-muted mt-3">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4 mt-5">Do better with money</h2>
          <p className="text-muted mt-3">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col p-5">
          <img
            src="Media/Images/ecosystem.png"
            style={{ width: "100%" }}
            alt="Ecosystem Image"
          />
          <div className="mt-4 mx-5">
            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" className="mx-3" style={{ textDecoration: "none" }}>
              Try Kite demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
