import {
  USER_SIGNUP,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_ERROR,
  USER_SIGNIN,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_ERROR,
  USER_SESSION_FETCH_SUCCESS,
  USER_SESSION_FETCH_ERROR,
} from "./Types";

interface IProductsState {
  loading: boolean;
  error: any;
  profile: any;
}

const initialState = {
  loading: false,
  error: null,
  profile: null,
};

interface IProductsReducerAction {
  type:
    | typeof USER_SIGNUP
    | typeof USER_SIGNUP_SUCCESS
    | typeof USER_SIGNUP_ERROR
    | typeof USER_SIGNIN
    | typeof USER_SIGNIN_SUCCESS
    | typeof USER_SIGNIN_ERROR
    | typeof USER_SESSION_FETCH_SUCCESS
    | typeof USER_SESSION_FETCH_ERROR;
  response?: any;
  error?: any;
}

export default function reducer(
  state: IProductsState = initialState,
  { type, response, error }: IProductsReducerAction
): IProductsState {
  switch (type) {
    case USER_SIGNIN:
      return {
        ...state,
        loading: true,
      };
    case USER_SIGNUP:
      return {
        ...state,
        loading: true,
      };
    case USER_SIGNIN_SUCCESS:
      return { ...state, profile: response };
    case USER_SIGNIN_ERROR:
      return { ...state, error: error };
    case USER_SIGNUP_SUCCESS:
      return { ...state };
    case USER_SIGNUP_ERROR:
      return { ...state, error: error };
    case USER_SESSION_FETCH_SUCCESS:
      return { ...state, profile: response };
    case USER_SESSION_FETCH_ERROR:
      return { ...state, error }
    default:
      return { ...state };
  }
}
