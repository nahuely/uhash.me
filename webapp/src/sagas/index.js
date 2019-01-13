import { all } from "redux-saga/effects";
import loginSagas from "./login";

export default function* rootSaga() {
  yield all([...loginSagas]);
}
