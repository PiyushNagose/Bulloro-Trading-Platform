export default function RightSection({
  ImageUrl,
  Title,
  TitleDesc,
  LearnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-6 p-5" style={{ marginTop: "5rem" }}>
          <h1 style={{ color: "#387ED1" }}>{Title}</h1>
          <p className="mt-3 text-muted" style={{ lineHeight: "1.8" }}>
            {TitleDesc}
          </p>

          <div className="mt-4">
            <a
              href={LearnMore}
              style={{
                color: "#535BF2",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Learn more <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="col-6 p-5 text-center">
          <img
            src={ImageUrl}
            alt={Title}
            style={{ width: "80%", borderRadius: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
}
