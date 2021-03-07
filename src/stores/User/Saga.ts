import { call, put } from "redux-saga/effects";
import { userSessionFetch, userSignin, userSignup } from "./Service";
import {
  userSigninSuccess,
  userSigninError,
  userSignupSuccess,
  userSignupError,
  userSessionFetchSuccess,
  userSessionFetchError,
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

export function* handleUserSessionFetch({type, payload}: any): any {
  try {
    const response = yield call(userSessionFetch);
    yield put(userSessionFetchSuccess(response));
  } catch (error) {
    yield put(userSessionFetchError(error));
  }
}