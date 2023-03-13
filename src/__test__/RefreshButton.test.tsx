import { render, fireEvent } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import { RefreshButton } from "../components/buttons/RefreshButton";
import { types } from "../redux/types/types";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("RefreshButton", () => {
  let dispatchMock: jest.Mock<any, any, any>;
  let useSelectorMock: jest.Mock<any, any, any>;

  beforeEach(() => {
    dispatchMock = jest.fn();

    useDispatch.mockReturnValue(dispatchMock);

    useSelectorMock = jest.fn();
    useSelector.mockReturnValue({ value: 0 });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the RefreshButton component", () => {
    const { getByText } = render(
      <RefreshButton showMsg="Show" reloadMsg="Reload" />
    );
    expect(getByText("Show")).toBeInTheDocument();
  });

  it("should dispatch the INCREASE action on click if the value is 0", () => {
    useSelectorMock.mockReturnValue({ value: 0 });
    const { getByText } = render(
      <RefreshButton showMsg="Show" reloadMsg="Reload" />
    );
    fireEvent.click(getByText("Show"));
    expect(dispatchMock).toHaveBeenCalledWith({ type: types.increase });
  });
});
