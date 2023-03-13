import { types } from "../redux/types/types";

test("exports the expected constants", () => {
  expect(types.increase).toEqual("INCREASE_COUNTER");
});
