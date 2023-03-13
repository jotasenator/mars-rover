import { render, screen } from "@testing-library/react";
import { Footer } from "../components/Footer";

describe("<Footer />", () => {
  it("renders the footer text", () => {
    render(<Footer />);
    const footerText = screen.getByText(/copyright © 2023/i);
    expect(footerText).toBeInTheDocument();
  });
});
