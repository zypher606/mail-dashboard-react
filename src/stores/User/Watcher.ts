import { all, takeEvery } from "redux-saga/effects";
import { handleUserSignin, handleUserSignup } from "./Saga";
import { USER_SIGNUP, USER_SIGNIN } from "./Types";

export default function userWatcher() {
  return all([
    takeEvery(USER_SIGNUP, handleUserSignup),
    takeEvery(USER_SIGNIN, handleUserSignin),
  ]);
}
