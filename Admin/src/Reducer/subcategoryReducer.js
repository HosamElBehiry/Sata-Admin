import * as types from "../app/actions/subcategory/subcategoryType";

const initialState = {
  loading: false,
  subCategories: [],
  subCategory: {},
  error: "",
};

const subcategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_RELATED:
      return {
        subCategories: action.payload,
        loading: false,
        error: "",
      };
    case types.ADD_NEW:
      return {
        ...state,
        subCategories: [state.subCategories, action.payload],
      };
    case types.FETCH_BY_ID:
      return {
        ...state,
        subCategory: action.payload,
        loading: false,
      };
    case types.UPDATE_BY_ID:
      return {
        ...state,
        loading: false,
        subCategory: action.payload,
      };
    case types.DELETE_BY_ID:
      const newSubs = state.subCategories.filter(
        (s) => s._id !== action.payload._id
      );
      return {
        ...state,
        subCategories: newSubs,
        loading: false,
        error: "",
      };
    case types.DELETE_MANY:
      return {
        ...state,
        subCategories: action.payload,
        error: "",
        loading: false,
      };
    case types.FETCH_ERROR:
      return {
        error: action.payload,
        subCategories: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default subcategoryReducer;
