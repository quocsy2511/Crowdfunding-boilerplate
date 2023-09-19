import { call, put } from "redux-saga/effects";
import {
  requestAuthFetchMe,
  requestAuthFreshToken,
  requestAuthLogin,
  requestAuthRegister,
} from "./auth-request";
import { toast } from "react-toastify";
import { logOut, saveToken } from "../../utils/auth";
import { authUpdateUser } from "./auth-slice";

export default function* handlerAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success("Register success !!! ");
    } else {
      toast.error("Created fail @@@@ ");
    }
  } catch (error) {
    console.log(error);
    toast.error("Created fail @@@@ ");
  }
}

function* handleAuthLogin(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthLogin, payload);
    if (response.status === 200) {
      toast.success("Login success !!! ");
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetchMe, { payload: response.data.accessToken });
    } else {
      toast.error("Login fail @@@@ ");
    }
  } catch (error) {
    console.log(error);
    toast.error("Login fail @@@@ ");
  }
}

function* handleAuthFetchMe({ payload }) {
  try {
    const response = yield call(requestAuthFetchMe, payload);
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data,
          accessToken: payload,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleAuthFreshToken({ payload }) {
  try {
    const response = yield call(requestAuthFreshToken, payload);
    if (response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield handleAuthFetchMe({ payload: response.data.accessToken });
    } else {
      yield handleAuthLogout();
    }
  } catch (error) {
    console.log("error", error);
  }
}

function* handleAuthLogout() {
  console.log("demo");
  yield put(authUpdateUser({ user: undefined, accessToken: null }));
  logOut();
}

export {
  handleAuthLogin,
  handleAuthFetchMe,
  handleAuthFreshToken,
  handleAuthLogout,
};
