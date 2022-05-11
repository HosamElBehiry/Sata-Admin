import * as types from "../app/actions/vendors/vendorTypes";

const initialState = {
  loading: false,
  vendors: [],
  error: "",
  vendor: null,
};

const vendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ALL:
      return {
        ...state,
        vendors: action.payload,
        loading: false,
        error: "",
      };
    case types.FETCH_BY_USR_ID:
      return {
        ...state,
        vendor: action.payload,
        loading: false,
        error: "",
      };
    case types.UPDATE_BY_USR_ID:
      let newVendors = state.vendors;
      const index = newVendors.findIndex((v) => v._id === action.payload._id);
      newVendors[index] = action.payload;
      return {
        ...state,
        vendors: newVendors,
        vendor: action.payload,
        error: "",
        loading: false,
      };
    case types.DEL_BY_USR_ID:
      const filtVendors = state.vendors.filter(
        (v) => v.user._id !== action.payload
      );
      return {
        ...state,
        vendors: filtVendors,
        error: "",
        vendor: null,
        loading: false,
      };
    case types.DELETE_MANY:
      return {
        ...state,
        vendors: action.payload,
        error: "",
        vendor: null,
        loading: false,
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        vendors: [],
        vendor: null,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default vendorReducer;
