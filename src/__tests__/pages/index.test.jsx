import { render, screen } from "@testing-library/react";
import HomePage from "../../pages/index";
import "@testing-library/jest-dom";

describe("HomePage", () => {
  it("renders a heading", () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading", {
      name: /Hello/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders homepage unchanged", () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
