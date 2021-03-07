import { all, takeEvery } from "redux-saga/effects";
import { handleEmailAdd, handleEmailFetchAll, handleEmailFetchThread } from "./Saga";
import { EMAIL_ADD, EMAIL_FETCH_ALL, EMAIL_FETCH_THREAD } from "./Types";

export default function emailWatcher() {
  return all([
    takeEvery(EMAIL_ADD, handleEmailAdd),
    takeEvery(EMAIL_FETCH_ALL, handleEmailFetchAll),
    takeEvery(EMAIL_FETCH_THREAD, handleEmailFetchThread),
  ]);
}
