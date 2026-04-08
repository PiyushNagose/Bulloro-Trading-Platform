import { render, screen } from "@testing-library/react";
import Hero from "../Home/Hero";

describe("Render Hero component", () => {
  test("render hero", () => {
    render(<Hero />);
    const heroImg = screen.getByAltText("Hero Image");
    expect(heroImg).toBeInTheDocument();
    expect(heroImg).toHaveAttribute(
      "src",
      expect.stringContaining("homeHero.png")
    );
  });

  test("checking signUp button", () => {
    render(<Hero />);
    const signUpButton = screen.getByRole("button", {
      name: /sign up for free/i,
    });
    expect(signUpButton).toBeInTheDocument();
    expect(signUpButton).toHaveClass("btn-primary");
  });
});
