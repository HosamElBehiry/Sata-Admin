import * as types from "../app/actions/deliveries/deliveryTypes";

const initialValues = {
  loading: false,
  deliveries: [],
  delivery: null,
  error: "",
};

const deliveryReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ALL:
      return {
        ...state,
        deliveries: action.payload,
        delivery: null,
        loading: false,
        error: "",
      };
    case types.FIND_BY_USR_ID:
      return {
        ...state,
        delivery: action.payload,
        deliveries: [],
        loading: false,
        error: "",
      };
    case types.UPDATE_BY_USR_ID:
      let newDeliveries = state.deliveries;
      const index = newDeliveries.findIndex(
        (d) => d._id === action.payload._id
      );
      newDeliveries[index] = action.payload;
      return {
        ...state,
        deliveries: newDeliveries,
        delivery: action.payload,
        error: "",
        loading: false,
      };
    case types.DELETE_BY_USR_ID:
      let filtDeliv = state.deliveries.filter(
        (d) => d.user._id !== action.payload
      );
      return {
        ...state,
        deliveries: filtDeliv,
        delivery: null,
        error: "",
        loading: false,
      };
    case types.DELETE_MANY:
      return {
        ...state,
        deliveries: action.payload,
        delivery: null,
        error: "",
        loading: false,
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        deliveries: [],
        delivery: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default deliveryReducer;
