import * as types from "../app/actions/category/categoryTypes";

const initialState = {
  loading: false,
  categories: [],
  subCategory: [],
  category: [],
  error: "",
  cat: {},
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALL_CATEGORY:
      return {
        ...state,
        loading: false,
        categories: action.payload,
        error: "",
      };
    case types.FETCH_BY_ID:
      return {
        ...state,
        cat: action.payload,
        loading: false,
        error: "",
      };
    case types.UPDATE_CATEGORY:
      return {
        ...state,
        loading: false,
        error: "",
        cat: action.payload,
      };
    case types.DELETE_BY_ID:
      const catData = state.categories.filter(
        (c) => c._id !== action.payload._id
      );
      return {
        ...state,
        categories: catData,
        loading: false,
        error: "",
      };
    case types.DELETE_MANY:
      return {
        ...state,
        categories: action.payload,
        error: "",
        loading: false,
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        categories: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
