import { call, put } from "redux-saga/effects";
import { emailAdd, emailFetchAll } from "./Service";
import {
  emailAddSuccess,
  emailAddError,
  emailFetchAllSuccess,
  emailFetchAllError,
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
    console.log("respons eform emails", response)
    yield put(emailFetchAllSuccess(response));
  } catch (error) {
    yield put(emailFetchAllError(error));
  }
}