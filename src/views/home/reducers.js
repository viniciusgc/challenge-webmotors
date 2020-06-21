import { ActionTypes as types } from "./constants";

export const initialState = {
  makes: [],
  models: [],
  versions: [],
  vehicles: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MAKES:
      return {
        ...state,
        makes: action.payload,
      };

    case types.FETCH_MODELS:
      return {
        ...state,
        models: action.payload,
      };

    case types.FETCH_VERSIONS:
      return {
        ...state,
        versions: action.payload,
      };

    case types.FETCH_VEHICLES:
      return {
        ...state,
        vehicles: action.payload,
      };

    case types.CLEAR_ALL:
      return {
        ...state,
        models: [],
        versions: [],
      };

    case types.CLEAR_VERSIONS:
      return {
        ...state,
        versions: [],
      };

    default:
      return state;
  }
};
