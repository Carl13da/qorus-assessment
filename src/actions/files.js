import fetch from 'cross-fetch';
import * as types from '../constants/actionTypes';

const getFilesSuccess = (file, res) => {
  return {
    type: types.GET_FILES_SUCCESS,
    file,
    res
  };
};

const getFilesFailure = file => {
  return {
    type: types.GET_FILES_FAILURE,
    file,
  };
};

export function getFiles(file) {
  return async (dispatch) => {
    try {
      const res = await fetch(`${file.url}/files`);

      if(res.status >= 400) {
        dispatch(getFilesFailure(file));
      }

      const json = await res.json();
      
      dispatch(getFilesSuccess(file, json.data));
    } catch (err) {
      dispatch(getFilesFailure(file));
    }
  };
}

export function checkFiles(list) {
  return (dispatch) => {
    list.forEach(file => {
      dispatch(getFiles(file));
    });
  };
}