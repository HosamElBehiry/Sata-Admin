import * as types from "../app/actions/workers/workerTypes";

const initialState = {
  loading: true,
  workers: [],
  error: "",
  worker: null,
};

const workerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ALL:
      return {
        ...state,
        workers: action.payload,
        loading: false,
        error: "",
      };
    case types.DEL_BY_USR_ID:
    case types.DEL_BY_ID:
      const filtWorkers = state.workers.filter((w) => w._id !== action.payload);
      return {
        ...state,
        workers: filtWorkers,
        worker: null,
        error: "",
        loading: false,
      };
    case types.DELETE_MANY:
      return {
        ...state,
        workers: action.payload,
        error: "",
        worker: null,
        loading: false,
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        workers: [],
        worker: null,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default workerReducer;
