import { all } from "redux-saga/effects";
import students from "./students";

function* rootSaga() {
  yield all([students()]);
}

export default rootSaga;
