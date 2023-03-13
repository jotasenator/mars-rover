import { render } from "@testing-library/react";
import { RenderImage } from "../components/RenderImage";

describe("RenderImage component", () => {
  it("renders the component with the correct props", () => {
    const props = {
      id: "test-image-cool",
      src: "https://Cool/url",
      alt: "Cool image",
      title: "Cool title",
    };

    const { getByAltText } = render(<RenderImage {...props} />);

    const imageElement = getByAltText(props.alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("id", props.id);
    expect(imageElement).toHaveAttribute("src", props.src);
    expect(imageElement).toHaveAttribute("title", props.title);
    expect(imageElement).toHaveAttribute("loading", "lazy");
  });
});
