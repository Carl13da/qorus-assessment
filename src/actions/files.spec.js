import * as ActionTypes from "../constants/actionTypes";
import * as ActionCreators from "./files";

describe("Actions", () => {
  beforeAll(() => {});
  afterAll(() => {});

  const file = {
    url: "https://localhost:44381",
  };

  it("should create an action to", () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.GET_FILES_SUCCESS,
      file,
    };

    expect(typeof ActionCreators.getFilesSuccess(file)).toEqual("function");
    ActionCreators.getFilesSuccess(file)(dispatch);

    expect(dispatch).toBeCalledWith(expected);
  });
});
