import { render, screen } from "@testing-library/react";
import { Title } from "../components/Title";

test("renders a title with the given prop", () => {
  render(<Title title="DevSkill Excercise" />);
  expect(screen.getByText("DevSkill Excercise")).toHaveClass("title");
  expect(screen.getByText("DevSkill Excercise")).toBeInTheDocument();
});
