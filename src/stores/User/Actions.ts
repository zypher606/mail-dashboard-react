import {
  USER_SIGNUP,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_ERROR,
  USER_SIGNIN,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_ERROR,
  USER_SESSION_FETCH,
  USER_SESSION_FETCH_SUCCESS,
  USER_SESSION_FETCH_ERROR,
} from "./Types";
import { ActionDispatcher } from "../ActionDispatcher/ActionDispatcher";
import { StorageManager } from "../../utilities";

export function userSignup(payload: any) {
  return ActionDispatcher.getInstance().dispatch({
    type: USER_SIGNUP,
    payload,
  });
}

export function userSignupSuccess(response: any) {
  return {
    type: USER_SIGNUP_SUCCESS,
    response,
  };
}

export function userSignupError(error: any) {
  return {
    type: USER_SIGNUP_ERROR,
    error,
  };
}

export function userSignin(payload: any) {
  return ActionDispatcher.getInstance().dispatch({
    type: USER_SIGNIN,
    payload,
  });
}

export function userSigninSuccess(response: any) {
  StorageManager.set('authorized', 'true');
  StorageManager.set('currentUser', response);
  return {
    type: USER_SIGNIN_SUCCESS,
    response,
  };
}

export function userSigninError(error: any) {
  return {
    type: USER_SIGNIN_ERROR,
    error,
  };
}

export function userSessionFetch() {
  return ActionDispatcher.getInstance().dispatch({
    type: USER_SESSION_FETCH,
  });
}

export function userSessionFetchSuccess(response: any) {
  return {
    type: USER_SESSION_FETCH_SUCCESS,
    response,
  };
}

export function userSessionFetchError(error: any) {
  return {
    type: USER_SESSION_FETCH_ERROR,
    error,
  };
}