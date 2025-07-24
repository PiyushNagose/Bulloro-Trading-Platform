export default function RightSection({
  ImageUrl,
  Title,
  TitleDesc,
  LearnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5" style={{marginTop: "10rem"}}>
          <h1>{Title}</h1>
          <p className="mt-3">{TitleDesc}</p>

          <div className="mt-5">
            <a href={LearnMore}>
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-6 p-5 mb-5">
          <img src={ImageUrl} />
        </div>
      </div>
    </div>
  );
}
