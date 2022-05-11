import * as types from "../app/actions/rates/rateTypes";

const initialState = {
  loading: false,
  rates: [],
  error: "",
};

const rateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FILTER_BY:
      return {
        ...state,
        rates: action.payload,
        loading: false,
        error: "",
      };
    case types.UPDATE_BY_ID:
      let newRates = state.rates;
      const index = newRates.findIndex((r) => r._id === action.payload._id);
      newRates[index] = action.payload;
      return {
        ...state,
        rates: newRates,
        loading: false,
        error: "",
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        rates: [],
      };
    default:
      return state;
  }
};

export default rateReducer;
