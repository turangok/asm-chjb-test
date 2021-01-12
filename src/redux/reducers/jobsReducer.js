import Immutable from "seamless-immutable";

export const ACTION_TYPES = {
  GET_JOBS: "GET_JOBS",
  SET_CURRENT_JOB: "SET_CURRENT_JOB"
}

export const initialState = Immutable({
  jobs: [],
  currentJob: {}
});

function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_JOBS:
      state = { ...state, jobs: action.payload }
      return state;
    case ACTION_TYPES.SET_CURRENT_JOB:
      state = { ...state, currentJob: action.payload }
      return state;
    default:
      return state;
  }
}

export default jobsReducer;
