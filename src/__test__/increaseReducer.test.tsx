import { increaseReducer } from "../redux/reducer/increaseReducer";
import { types } from "../redux/types/types";

describe("increaseReducer", () => {
  test("should return initial state", () => {
    expect(increaseReducer(undefined, { type: "NO_TYPE" })).toEqual({
      value: 0,
    });
  });

  test("should handle increase action type", () => {
    const action = { type: types.increase };
    const initialState = { value: 0 };
    const expectedState = { value: 1 };

    expect(increaseReducer(initialState, action)).toEqual(expectedState);
  });

  test("should return default state for unknown action type", () => {
    const action = { type: "UNKNOWN_ACTION_TYPE" };
    const initialState = { value: 0 };

    expect(increaseReducer(initialState, action)).toEqual(initialState);
  });
});
