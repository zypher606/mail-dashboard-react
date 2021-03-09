import { all, takeEvery } from "redux-saga/effects";
import { handleEmailAdd, handleEmailFetchAll, handleEmailFetchThread, handleEmailMarkDelete, handleEmailMarkRead } from "./Saga";
import { EMAIL_ADD, EMAIL_FETCH_ALL, EMAIL_FETCH_THREAD, EMAIL_MARK_DELETE, EMAIL_MARK_READ } from "./Types";

export default function emailWatcher() {
  return all([
    takeEvery(EMAIL_ADD, handleEmailAdd),
    takeEvery(EMAIL_FETCH_ALL, handleEmailFetchAll),
    takeEvery(EMAIL_FETCH_THREAD, handleEmailFetchThread),
    takeEvery(EMAIL_MARK_READ, handleEmailMarkRead),
    takeEvery(EMAIL_MARK_DELETE, handleEmailMarkDelete),
  ]);
}
