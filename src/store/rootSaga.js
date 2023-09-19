import { all, fork } from "redux-saga/effects";
import authSage from "./auth/auth-saga";

export default function* rootSaga() {
  yield all([fork(authSage)]);
}
