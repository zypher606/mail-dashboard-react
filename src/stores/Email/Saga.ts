import { call, put } from "redux-saga/effects";
import { emailAdd, emailFetchAll, emailFetchThread, emailMarkRead, emailMarkDelete } from "./Service";
import {
  emailAddSuccess,
  emailAddError,
  emailFetchAllSuccess,
  emailFetchAllError,
  emailFetchThreadSuccess,
  emailFetchThreadError,
  emailMarkReadSuccess,
  emailMarkReadError,
  emailMarkDeleteSuccess,
  emailMarkDeleteError,
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

export function* handleEmailMarkRead({type, payload}: any): any {
  try {
    const response = yield call(emailMarkRead, payload);
    yield put(emailMarkReadSuccess(response));
  } catch (error) {
    yield put(emailMarkReadError(error));
  }
}

export function* handleEmailMarkDelete({type, payload}: any): any {
  try {
    const response = yield call(emailMarkDelete, payload);
    yield put(emailMarkDeleteSuccess(response));
  } catch (error) {
    yield put(emailMarkDeleteError(error));
  }
}