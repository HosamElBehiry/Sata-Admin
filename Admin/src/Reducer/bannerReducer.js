import * as types from "../app/actions/banners/bannerTypes";

const initialState = {
  loading: true,
  banners: [],
  banner: null,
  error: "",
};

const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_NEW:
      const newBanner = state.banners.concat(action.payload);
      return {
        ...state,
        banners: newBanner,
        banner: action.payload,
        loading: false,
        error: "",
      };
    case types.FETCH_ALL:
      return {
        ...state,
        banners: action.payload,
        loading: false,
        error: "",
      };
    case types.FETCH_BY_ID:
      return {
        ...state,
        banner: action.payload,
        loading: false,
        error: "",
      };
    case types.UPDATE_BY_ID:
      const newBanners = state.banners;
      const bnrIndx = newBanners.findIndex((b) => b._id === action.payload._id);
      newBanners[bnrIndx] = action.payload;
      return {
        ...state,
        banner: action.payload,
        banners: newBanners,
        loading: false,
        error: "",
      };
    case types.DELETE_BY_ID:
      const filtBnr = state.banners.filter((b) => b._id !== action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        banners: filtBnr,
        banner: null,
      };
    case types.DELETE_MANY:
      return {
        ...state,
        banners: action.payload,
        error: "",
        banner: null,
        loading: false,
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        banners: [],
        banner: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bannerReducer;
