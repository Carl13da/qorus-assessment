import fetch from 'cross-fetch';
import * as types from '../constants/actionTypes';

const uploadFileSuccess = (file, res) => {
  return {
    type: types.UPLOAD_FILES_SUCCESS,
    file,
    res
  };
};

const uploadFileFailure = file => {
  return {
    type: types.UPLOAD_FILES_FAILURE,
    file,
  };
};

export function uploadFile(file, payload) {
  return async (dispatch) => {
    try {
      const res = await fetch(`${file}`, {
        method: "POST",
        body: payload,
      });

      if(res.status >= 400) {
        dispatch(uploadFileFailure(file));
      }
  
      const json = await res.json();
      dispatch(uploadFileSuccess(file, json.data));
    } catch (err) {
      dispatch(uploadFileFailure(file));
    }
  }
  
}