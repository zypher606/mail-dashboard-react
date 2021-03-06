import {
  USER_SIGNUP,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_ERROR,
  USER_SIGNIN,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_ERROR,
} from "./Types";
import { ActionDispatcher } from "../ActionDispatcher/ActionDispatcher";

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

export function userSignin() {
  return ActionDispatcher.getInstance().dispatch({
    type: USER_SIGNIN,
  });
}

export function userSigninSuccess(response: any) {
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