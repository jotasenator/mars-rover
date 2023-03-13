import { renderHook } from "@testing-library/react-hooks";
import { useSelector } from "react-redux";
import { roverData } from "../data/roverData";
import { UseFetchHook } from "../hooks/UseFetchHook";
import { increaseReducer } from "../redux/reducer/increaseReducer";
import { types } from "../redux/types/types";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("UseFetchHook", () => {
  const mockSelector = useSelector as jest.MockedFunction<typeof useSelector>;

  test("should return an empty array if value is 0", () => {
    const totalNumberOfPhotos = 5;
    const value = 0;
    mockSelector.mockReturnValue({ value });

    const { result } = renderHook(() =>
      UseFetchHook(roverData, totalNumberOfPhotos)
    );

    expect(result.current.photos).toEqual([]);
  });

  test("should return a random selection of RoverData if value is greater than 0", () => {
    const totalNumberOfPhotos = 5;
    const value = 1;
    mockSelector.mockReturnValue({ value });

    const { result } = renderHook(() =>
      UseFetchHook(roverData, totalNumberOfPhotos)
    );

    expect(result.current.photos.length).toBeLessThanOrEqual(
      totalNumberOfPhotos
    );
  });

  test("should increase the value when receiving the INCREASE action", () => {
    const action = { type: types.increase };
    const initialState = { value: 0 };
    const expectedState = { value: 1 };

    expect(increaseReducer(initialState, action)).toEqual(expectedState);
  });

  test("should call useSelector with the correct arguments", () => {
    const totalNumberOfPhotos = 5;
    const value = 1;
    const mockState = { increaseReducer: { value } };
    mockSelector.mockReturnValue(mockState.increaseReducer);

    renderHook(() => UseFetchHook(roverData, totalNumberOfPhotos));

    expect(mockSelector).toHaveBeenCalledWith(expect.any(Function));
    expect(mockSelector.mock.calls[0][0](mockState)).toEqual(
      mockState.increaseReducer
    );
  });
});
