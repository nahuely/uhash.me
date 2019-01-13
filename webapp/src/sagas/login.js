import { take, call, put, fork } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import * as actions from "../actions/login";
import * as api from "../api/login";

function* login(action) {
  try {
    const result = yield call(
      api.login,
      action.payload.email,
      action.payload.password
    );

    yield put(
      actions.loginSuccess({
        token: 123
      })
    );
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

const loginSagas = [fork(watchLoginRequest)];

export default loginSagas;
