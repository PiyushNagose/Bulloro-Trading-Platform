import { render, screen } from "@testing-library/react";
import Hero from "../Home/Hero";

describe("Render Hero component", () => {
  test("render hero", () => {
    render(<Hero />);
    const HeroImg = screen.getByAltText("Hero Image");
    expect(HeroImg).toBeInTheDocument();
    expect(HeroImg).toHaveAttribute(
      "src",
      expect.stringContaining("homeHero.png")
    );
  });

  test("checking signUp button", () => {
    render(<Hero />);
    const signUpButton = screen.getByRole("button", {
      name: /Sign Up For Free/i,
    });
    expect(signUpButton).toBeInTheDocument();
    expect(signUpButton).toHaveClass("btn-primary");
  });
});
