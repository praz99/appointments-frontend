import { AUTH_INIT, AUTH_SUCCESS, AUTH_FAILURE } from '../actions/index';

const signupReducer = (state = {}, action) => {
  switch(action.type) {
    case AUTH_INIT:
      return { ...state, isLoading: true };
    case AUTH_SUCCESS:
      return { ...state, isLoading: false, isLoggedinUser: true, };
    case AUTH_FAILURE:
      return { ...state, isLoading: false, isError: true }
    default:
      return state;
  }
};

export default signupReducer;