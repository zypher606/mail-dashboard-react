import { call, put } from "redux-saga/effects";
import { userSignin, userSignup } from "./Service";
import {
  userSigninSuccess,
  userSigninError,
  userSignupSuccess,
  userSignupError,
} from "./Actions";

export function* handleUserSignin({type, payload}: any): any {
  try {
    const response = yield call(userSignin, payload);
    yield put(userSigninSuccess(response));
  } catch (error) {
    yield put(userSigninError(error));
  }
}

export function* handleUserSignup({type, payload}: any): any {
  console.log("assas", payload)
  try {
    const response = yield call(userSignup, payload);
    yield put(userSignupSuccess(response));
  } catch (error) {
    yield put(userSignupError(error));
  }
}