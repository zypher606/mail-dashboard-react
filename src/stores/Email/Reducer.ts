import {
  EMAIL_ADD,
  EMAIL_ADD_SUCCESS,
  EMAIL_ADD_ERROR,
  EMAIL_FETCH_ALL,
  EMAIL_FETCH_ALL_SUCCESS,
  EMAIL_FETCH_ALL_ERROR,
  EMAIL_FETCH_THREAD,
  EMAIL_FETCH_THREAD_SUCCESS,
  EMAIL_FETCH_THREAD_ERROR,
} from "./Types";

interface IProductsState {
  loading: boolean;
  error: any;
  emails: any;
  unreadCount: number;
  thread: any;
}

const initialState = {
  loading: false,
  error: null,
  emails: null,
  unreadCount: 0,
  thread: [],
};

interface IProductsReducerAction {
  type:
    | typeof EMAIL_ADD
    | typeof EMAIL_ADD_SUCCESS
    | typeof EMAIL_ADD_ERROR
    | typeof EMAIL_FETCH_ALL
    | typeof EMAIL_FETCH_ALL_SUCCESS
    | typeof EMAIL_FETCH_ALL_ERROR
    | typeof EMAIL_FETCH_THREAD
    | typeof EMAIL_FETCH_THREAD_SUCCESS
    | typeof EMAIL_FETCH_THREAD_ERROR;
  response?: any;
  error?: any;
}

export default function reducer(
  state: IProductsState = initialState,
  { type, response, error }: IProductsReducerAction
): IProductsState {
  switch (type) {
    case EMAIL_ADD:
      return {
        ...state,
        loading: true,
      };
    case EMAIL_FETCH_ALL:
      return {
        ...state,
        loading: true,
      };
    case EMAIL_ADD_SUCCESS:
      return { ...state };
    case EMAIL_ADD_ERROR:
      return { ...state, error: error };
    case EMAIL_FETCH_ALL_SUCCESS:
      return { ...state, emails: response, unreadCount: response.filter(({is_read}: any) => is_read !== true ).length };
    case EMAIL_FETCH_ALL_ERROR:
      return { ...state, error: error };
    case EMAIL_FETCH_THREAD:
      return { ...state, loading: true };
    case EMAIL_FETCH_THREAD_SUCCESS:
      return { ...state, thread: response };
    case EMAIL_FETCH_THREAD_ERROR:
      return { ...state, error };
    default:
      return { ...state };
  }
}
