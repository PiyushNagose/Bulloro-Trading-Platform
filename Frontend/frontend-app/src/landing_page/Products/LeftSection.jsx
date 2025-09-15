export default function LeftSection({
  ImageUrl,
  Title,
  TitleDesc,
  TryDemo,
  LearnMore,
  GooglePlay,
  AppStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-6 p-5 text-center">
          <img src={ImageUrl} alt={Title} style={{ maxWidth: "90%" }} />
        </div>
        <div className="col-6 mt-5 p-5">
          <h1>{Title}</h1>
          <p className="mt-3 text-muted">{TitleDesc}</p>

          <div className="mt-5">
            <a
              href={TryDemo}
              style={{
                color: "#387ED1",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Try demo <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href={LearnMore}
              style={{
                marginLeft: "4rem",
                color: "#387ED1",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Learn more <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="mt-4">
            <a href={GooglePlay}>
              <img src="Media/Images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={AppStore} style={{ marginLeft: "2rem" }}>
              <img src="Media/Images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
