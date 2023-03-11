// import the library and the hook
import { renderHook } from "@testing-library/react-hooks";
import { roverData } from "../data/roverData";
import { UseFetchHook } from "../hooks/UseFetchHook";
import { getRandomNumberOfIndexes } from "../helpers/randomNumber";

//const mockGetRandomNumberOfIndexes = jest.fn();

// mock the module that exports the helper function
jest.mock("../helpers/randomNumber", () => ({
  getRandomNumberOfIndexes: jest.fn(),
}));

// write a test case
describe("UseFetchHook", () => {
  it("should return a random subset of the data", () => {
    // mock the return value of the helper function
    (getRandomNumberOfIndexes as jest.Mock).mockReturnValue([
      roverData[0],
      roverData[2],
    ]);

    // render the hook with the mock data and a number
    const { result } = renderHook(() => UseFetchHook(roverData, 2));

    //console.log("renderHook data", result.current.photos);
    //console.log("roverDataObject", [roverData[0], roverData[2]]);

    // assert that the hook returns the expected value
    expect(result.current.photos).toEqual([roverData[0], roverData[2]]);
  });
});
