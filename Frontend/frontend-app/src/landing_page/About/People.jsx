export default function People() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Our Team</h1>
      <div className="row p-5">
        <div className="col p-2 text-center">
          <img
            src="Media/Images/founder.png" // replace with your own image
            style={{
              width: "250px", // square dimensions
              height: "250px", // same as width
              borderRadius: "50%", // makes it circular
              objectFit: "cover", // ensures image fills the circle
            }}
            alt="Founder"
          />
          <h4 className="my-3">Piyush Nagose</h4>
          <h6>Founder & CEO, Bulloro</h6>
        </div>
        <div className="col mt-4 text-muted p-2">
          <p>
            Toshit founded Bulloro with the vision of building a next-generation
            trading platform that focuses on simplicity, transparency, and
            speed. His goal is to make trading accessible and empowering for
            everyone.
          </p>
          <p>
            Under his leadership, Bulloro is evolving into a powerful ecosystem
            of tools and innovations that support investors and traders at every
            step of their journey.
          </p>
          <p>
            Outside of work, Toshit enjoys exploring nature, traveling, and
            playing badminton and football.
          </p>
          <p>
            Connect on
            <a href="https://github.com/PiyushNagose" target="_blank">
              GitHub
            </a>{" "}
            /{" "}
            <a
              href="https://www.linkedin.com/in/toshit-nagose/"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
