import { call, put } from "redux-saga/effects";
import { emailAdd, emailFetchAll, emailFetchThread } from "./Service";
import {
  emailAddSuccess,
  emailAddError,
  emailFetchAllSuccess,
  emailFetchAllError,
  emailFetchThreadSuccess,
  emailFetchThreadError,
} from "./Actions";

export function* handleEmailAdd({type, payload}: any): any {
  try {
    const response = yield call(emailAdd, payload);
    yield put(emailAddSuccess(response));
  } catch (error) {
    yield put(emailAddError(error));
  }
}

export function* handleEmailFetchAll({type, payload}: any): any {
  try {
    const response = yield call(emailFetchAll);
    yield put(emailFetchAllSuccess(response));
  } catch (error) {
    yield put(emailFetchAllError(error));
  }
}

export function* handleEmailFetchThread({type, payload}: any): any {
  try {
    const response = yield call(emailFetchThread, payload);
    yield put(emailFetchThreadSuccess(response));
  } catch (error) {
    yield put(emailFetchThreadError(error));
  }
}