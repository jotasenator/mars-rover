import { roverData } from "../data/roverData";
import { getRandomNumberOfIndexes } from "../helpers/randomNumber";

test("returns a new array of RoverData objects with the given length, randomly selected from the original array", () => {
  const num = 20;
  // call the function with the data and a number
  const result = getRandomNumberOfIndexes(roverData, num);

  // check the length of the result array
  expect(result).toHaveLength(num);

  // check that the result array contains RoverData objects from the original array
  for (let item of result) {
    expect(roverData).toContain(item);
  }

  // check that the result array does not contain duplicates
  expect(new Set(result).size).toBe(result.length);
});

test("returns all the data if we use all the length", () => {
  // call the function with the data and a number equal to the length of the data
  const totalData = getRandomNumberOfIndexes(roverData, roverData.length);

  // check that the result array is the same as the original array
  expect(totalData.length).toEqual(roverData.length);
});
