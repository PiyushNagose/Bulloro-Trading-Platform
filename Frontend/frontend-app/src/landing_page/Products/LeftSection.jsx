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
      <div className="row">
        <div className="col-6 p-5">
          <img src={ImageUrl} />
        </div>
        <div className="col-6 mt-5 p-5">
          <h1>{Title}</h1>
          <p className="mt-3">{TitleDesc}</p>

          <div className="mt-5">
            <a href={TryDemo}>
              Try demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href={LearnMore} style={{ marginLeft: "6rem" }}>
              Learn more<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={GooglePlay}>
              <img src="Media/Images/googlePlayBadge.svg" />
            </a>
            <a href={AppStore} style={{ marginLeft: "2rem" }}>
              <img src="Media/Images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
