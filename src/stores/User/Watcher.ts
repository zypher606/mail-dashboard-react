import { all, takeEvery } from "redux-saga/effects";
import { handleUserSessionFetch, handleUserSignin, handleUserSignup } from "./Saga";
import { USER_SIGNUP, USER_SIGNIN, USER_SESSION_FETCH } from "./Types";

export default function userWatcher() {
  return all([
    takeEvery(USER_SIGNUP, handleUserSignup),
    takeEvery(USER_SIGNIN, handleUserSignin),
    takeEvery(USER_SESSION_FETCH, handleUserSessionFetch)
  ]);
}
