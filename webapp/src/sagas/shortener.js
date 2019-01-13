import { take, call, put, fork } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import * as actions from "../actions/shortener";
import * as api from "../api/shortener";

function* shortener(action) {
  try {
    const { data } = yield call(api.createShortener, action.payload.url);

    yield put(actions.shortenerSuccess(data.hash));
  } catch (error) {
    yield put(
      actions.shortenerError({
        error
      })
    );
  }
}

function* watchShortenerRequest() {
  while (true) {
    const action = yield take(types.SHORTENER_REQUEST);
    yield call(shortener, action);
  }
}

const shortenerSagas = [fork(watchShortenerRequest)];

export default shortenerSagas;
