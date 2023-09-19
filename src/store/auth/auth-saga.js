import { takeLatest } from "redux-saga/effects";
import {
  authFreshToken,
  authLogin,
  authLogout,
  authRegister,
} from "./auth-slice";
import handlerAuthRegister, {
  handleAuthFreshToken,
  handleAuthLogin,
  handleAuthLogout,
} from "./auth-handler";

export default function* authSage() {
  yield takeLatest(authRegister.type, handlerAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authFreshToken.type, handleAuthFreshToken);
  yield takeLatest(authLogout.type, handleAuthLogout);
}
