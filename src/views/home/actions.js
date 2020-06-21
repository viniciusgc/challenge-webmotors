import client from "../../client";
import { API } from "../../constants";
import { ActionTypes as types } from "./constants";

export const fetchMakes = () => (dispatch) => {
  client
    .get(`${API.MAKE}`)
    .then((response) => {
      dispatch({
        type: types.FETCH_MAKES,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchModels = (MakeID) => (dispatch) => {
  client
    .get(`${API.MODEL}?MakeID=${MakeID}`)
    .then((response) => {
      dispatch({
        type: types.FETCH_MODELS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchVersions = (ModelID) => (dispatch) => {
  client
    .get(`${API.VERSION}?ModelID=${ModelID}`)
    .then((response) => {
      dispatch({
        type: types.FETCH_VERSIONS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchVehicles = (page = 1) => (dispatch) => {
  client
    .get(`${API.VEHICLE}?Page=${page}`)
    .then((response) => {
      dispatch({
        type: types.FETCH_VEHICLES,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const clearAll = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_ALL,
  });
};

export const clearVersions = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_VERSIONS,
  });
};
