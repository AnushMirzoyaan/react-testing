import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="testUser" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello testUser/i);
  });

  it("should render login button when name i snot provided", () => {
    render(<Greet />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});