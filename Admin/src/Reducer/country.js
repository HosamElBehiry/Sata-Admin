import * as types from "../app/actions/shipping/country/countryTypes";

const initialState = {
  loading: false,
  countries: [],
  country: null,
  error: "",
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ALL:
      return {
        ...state,
        countries: action.payload,
        loading: false,
        error: "",
      };
    case types.ADD_NEW:
      return {
        ...state,
        countries: [...state.countries, action.payload],
        loading: false,
        error: "",
      };
    case types.FIND_BY_ID:
      return {
        ...state,
        country: action.payload,
        loading: false,
        error: "",
      };
    case types.UPDATE_BY_ID:
      let newCountries = state.countries;
      const index = newCountries.findIndex((c) => c._id === action.payload._id);
      newCountries[index] = action.payload;
      return {
        ...state,
        countries: newCountries,
        loading: false,
        country: action.payload,
        error: "",
      };
    case types.DELETE_MANY:
      return {
        ...state,
        countries: action.payload,
        loading: false,
        error: "",
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        countries: [],
        country: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default countryReducer;
