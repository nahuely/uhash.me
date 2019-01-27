import { take, call, put, fork, select } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import * as actions from "../actions/login";
import * as api from "../api/login";
import { authSelector } from "../reducers/login";
import history from "../helpers/history";

function* login(action) {
  try {
    const { payload } = action;
    const res = yield call(api.login, payload.email, payload.password);

    yield put(
      actions.loginSuccess({
        token: res.data.token
      })
    );

    localStorage.setItem("token", res.data.token);
    history.push("/user/profile");
  } catch (error) {
    yield put(
      actions.loginError({
        error
      })
    );
  }
}

function* watchLoginRequest() {
  while (true) {
    const action = yield take(types.LOGIN_REQUEST);
    yield call(login, action);
  }
}

function* checkAuth(action) {
  try {
    const { token } = yield select(authSelector);
    const res = yield call(api.checkAuth, token);
    debugger;

    // yield put(
    //   actions.loginSuccess({
    //     token: res.data.token
    //   })
    // );

    // localStorage.setItem("token", res.data.token);
    // history.push("/profile");
    console.log("asdas");
  } catch (error) {
    history.push("/login");
    // yield put(
    //   actions.loginError({
    //     error
    //   })
    // );
  }
}

function* watchCheckAuthRequest() {
  while (true) {
    const action = yield take(types.CHECK_AUTH);
    yield call(checkAuth, action);
  }
}

const loginSagas = [fork(watchLoginRequest), fork(watchCheckAuthRequest)];

export default loginSagas;
