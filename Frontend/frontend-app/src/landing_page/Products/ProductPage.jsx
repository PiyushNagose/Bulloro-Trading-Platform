import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function ProductPage() {
  return (
    <>
      <Hero />

      <LeftSection
        ImageUrl="Media/Images/kite.png"
        Title="Kite"
        TitleDesc="Bulloro’s ultra-fast flagship trading platform with streaming market data, advanced charts, and an elegant UI. Trade seamlessly on Android and iOS."
        TryDemo="#"
        LearnMore="#"
        GooglePlay="#"
        AppStore="#"
      />

      <RightSection
        ImageUrl="Media/Images/console.png"
        Title="Console"
        TitleDesc="Your central dashboard on Bulloro. Gain insights into trades and investments with in-depth reports and visualisations."
        LearnMore="#"
      />

      <LeftSection
        ImageUrl="Media/Images/coin.png"
        Title="Coin"
        TitleDesc="Buy direct mutual funds online, commission-free, delivered to your Demat account. Experience investing made simple on Bulloro mobile apps."
        TryDemo="#"
        LearnMore="#"
        GooglePlay="#"
        AppStore="#"
      />

      <RightSection
        ImageUrl="Media/Images/landing.svg"
        Title="Kite Connect API"
        TitleDesc="Build powerful trading platforms using Bulloro’s HTTP/JSON APIs. Ideal for startups and developers looking to create their own investment apps."
        LearnMore="#"
      />

      <LeftSection
        ImageUrl="Media/Images/varsity-products.png"
        Title="Varsity Mobile"
        TitleDesc="Learn the stock market with Bulloro Varsity. Bite-sized lessons and interactive content to help you grasp investing concepts on the go."
        TryDemo="#"
        LearnMore="#"
        GooglePlay="#"
        AppStore="#"
      />

      <h3
        className="text-center fs-4 fw-normal text-muted"
        style={{ marginBottom: "5rem", marginTop: "3rem" }}
      >
        Want to know more about our technology stack? Check out the
        <a href="#">Bulloro.tech</a> blog.
      </h3>

      <Universe />
    </>
  );
}
