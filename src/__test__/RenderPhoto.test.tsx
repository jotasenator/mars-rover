import { render } from "@testing-library/react";
import { RenderPhoto } from "../components/RenderPhoto";

test("exist desired classes on the elements rendered", () => {
  const { container } = render(<RenderPhoto />);

  //just one class photos
  const photos = container.getElementsByClassName("photos");
  expect(photos.length).toBe(1);

  //six elements with photo-container class
  const photoContainer = container.getElementsByClassName("photo-container");
  expect(photoContainer.length).toBe(6);
});
