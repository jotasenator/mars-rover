import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../redux/reducer/rootReducer";
import { store } from "../redux/store/store";

describe("store", () => {
  it("should create the store with the configured rootReducer", () => {
    expect(store.getState()).toEqual(rootReducer(undefined, { type: "" }));
  });

  it("should create the store with the configured middleware", () => {
    const storeWithMiddleware = createStore(
      rootReducer,
      applyMiddleware(thunk)
    );

    expect(storeWithMiddleware.getState()).toEqual(store.getState());
  });
});
