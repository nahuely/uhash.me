import { all } from "redux-saga/effects";
import loginSagas from "./login";
import shortenerSagas from "./shortener";

export default function* rootSaga() {
  yield all([...loginSagas, ...shortenerSagas]);
}
