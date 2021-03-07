import { all, takeEvery } from "redux-saga/effects";
import { handleEmailAdd, handleEmailFetchAll } from "./Saga";
import { EMAIL_ADD, EMAIL_FETCH_ALL } from "./Types";

export default function emailWatcher() {
  return all([
    takeEvery(EMAIL_ADD, handleEmailAdd),
    takeEvery(EMAIL_FETCH_ALL, handleEmailFetchAll),
  ]);
}
