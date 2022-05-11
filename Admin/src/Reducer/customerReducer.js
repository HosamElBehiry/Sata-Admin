import * as types from "../app/actions/customers/customerTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_BY_ROLE:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: "",
      };
    case types.FETCH_BY_ID:
      return {
        ...state,
        user: action.payload,
        error: "",
        loading: false,
      };
    case types.UPDATE_BY_ID:
      let newUsers = state.users;
      const index = newUsers.findIndex((u) => u._id === action.payload._id);
      newUsers[index] = action.payload;
      return {
        ...state,
        users: newUsers,
        error: "",
        user: action.payload,
        loading: false,
      };
    case types.DELETE_BY_ID:
      const filtUsers = state.users.filter((u) => u._id !== action.payload);
      return {
        ...state,
        users: filtUsers,
        error: "",
        user: null,
        loading: false,
      };
    case types.DELETE_MANY:
      return {
        ...state,
        users: action.payload,
        error: "",
        user: null,
        loading: false,
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        users: [],
        user: null,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
