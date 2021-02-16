import {
  GET_FILES_SUCCESS,
  GET_FILES_FAILURE,
} from "../constants/actionTypes";
import initialState from "./initialState";

export default function filesReducer(state = initialState().files, action) {
  let list, fileIndex;
  switch (action.type) {
    case GET_FILES_SUCCESS:
      list = state.list;
      fileIndex = state.list.findIndex((p) => p.url === action.file.url);
      if (fileIndex >= 0) {
        list = action.res;
      }
      return {
        ...state,
        list,
      };
    case GET_FILES_FAILURE:
      list = state.list;
      fileIndex = state.list.findIndex((p) => p.url === action.file.url);
      if (fileIndex >= 0) {
        list = [
          ...state.list.slice(0, fileIndex),
          {
            ...state.list[fileIndex],
            loading: false,
          },
          ...state.list.slice(fileIndex + 1),
        ];
      }
      return {
        ...state,
        list,
      };
    default:
      return state;
  }
}
