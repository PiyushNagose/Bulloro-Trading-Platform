import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./landing_page/NavBar";
import Footer from "./landing_page/Footer";
import SignUp from "./landing_page/SignUp/SignUp";
import HomePage from "./landing_page/Home/HomePage";
import AboutPage from "./landing_page/About/AboutPage";
import ProductPage from "./landing_page/Products/ProductPage";
import PricingPage from "./landing_page/Pricing/PricingPage";
import SupportPage from "./landing_page/Support/SupportPage";
import NotFound from "./landing_page/NotFound";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
