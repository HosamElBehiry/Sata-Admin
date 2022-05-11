import * as types from "../app/actions/sliders/sliderTypes";

const initialState = {
  loading: false,
  sliders: [],
  slider: null,
  error: "",
};

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_NEW:
      const newSliders = state.sliders.concat(action.payload);
      return {
        ...state,
        sliders: newSliders,
        loading: false,
        error: "",
        slider: action.payload,
      };
    case types.FIND_BY_ID:
      return {
        ...state,
        slider: action.payload,
        loading: false,
        error: "",
      };
    case types.FETCH_ALL:
      return {
        ...state,
        sliders: action.payload,
        loading: false,
        error: "",
      };
    case types.UPDATE_BY_ID:
      const updSliders = state.sliders;
      const slidersIndx = updSliders.findIndex(
        (s) => s._id === action.payload._id
      );
      updSliders[slidersIndx] = action.payload;
      return {
        ...state,
        slider: action.payload,
        sliders: updSliders,
        loading: false,
        error: "",
      };
    case types.DELETE_BY_ID:
      const filtSliders = state.sliders.filter((s) => s._id !== action.payload);
      return {
        ...state,
        sliders: filtSliders,
        loading: false,
        error: "",
        slider: null,
      };
    case types.DELETE_MANY:
      return {
        ...state,
        sliders: action.payload,
        error: "",
        slider: null,
        loading: false,
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        sliders: [],
        slider: null,
      };
    default:
      return state;
  }
};

export default sliderReducer;
