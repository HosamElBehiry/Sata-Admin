import * as types from "../app/actions/shipping/city/cityTypes";

const initialstate = {
  loading: false,
  cities: [],
  city: null,
  error: "",
};

const cityReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ALL:
      return {
        ...state,
        cities: action.payload,
        erorr: "",
        loading: false,
      };
    case types.ADD_NEW:
      return {
        ...state,
        cities: [...state.cities, action.payload],
        loading: false,
        error: "",
        city: action.payload,
      };
    case types.FIND_BY_ID:
      return {
        ...state,
        city: action.payload,
        loading: false,
        error: "",
      };
    case types.UPDATE_BY_ID:
      let newCities = state.cities;
      const index = newCities.findIndex((c) => c._id === action.payload._id);
      newCities[index] = action.payload;
      return {
        ...state,
        cities: newCities,
        city: action.payload,
        loading: false,
        error: "",
      };
    case types.DELETE_MANY:
      return {
        ...state,
        cities: action.payload,
        loading: false,
        error: "",
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        cities: [],
        city: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default cityReducer;
