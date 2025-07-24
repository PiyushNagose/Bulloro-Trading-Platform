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
        TitleDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        TryDemo="#"
        LearnMore="#"
        GooglePlay="#"
        AppStore="#"
      />
      <RightSection
        ImageUrl="Media/Images/console.png"
        Title="Console"
        TitleDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        LearnMore="#"
      />
      <LeftSection
        ImageUrl="Media/Images/coin.png"
        Title="Coin"
        TitleDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        TryDemo="#"
        LearnMore="#"
        GooglePlay="#"
        AppStore="#"
      />
      <RightSection
        ImageUrl="Media/Images/landing.svg"
        Title="Kite Connect API"
        TitleDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        LearnMore="#"
      />
      <LeftSection
        ImageUrl="Media/Images/varsity-products.png"
        Title="Varsity Mobile"
        TitleDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
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
        <a href="#">Zerodha.tech</a>
        blog.
      </h3>
      <Universe />
    </>
  );
}
