import * as types from "../app/actions/blogs/types";

const initialState = {
  loading: false,
  blogs: [],
  blog: null,
  error: "",
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ALL:
      return {
        ...state,
        blogs: action.payload,
        loading: false,
        error: "",
      };
    case types.ADD_NEW:
      const newBlogs = state.blogs;
      newBlogs.push(action.payload);
      return {
        ...state,
        blogs: newBlogs,
        error: "",
        loading: false,
        blog: null,
      };
    case types.DELETE_BLOG:
      const filtBlogs = state.blogs.filter((b) => b._id !== action.payload);
      return {
        ...state,
        blogs: filtBlogs,
        error: "",
        loading: false,
        blog: null,
      };
    case types.DELETE_MANY:
      return {
        ...state,
        blogs: action.payload,
        error: "",
        loading: false,
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        blogs: [],
        blog: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default blogReducer;
