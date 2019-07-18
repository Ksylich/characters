import { AnyAction } from "redux";
import {
  all,
  put, takeEvery,
  // takeLatest, call,
} from "redux-saga/effects";
import * as actions from "../redux/actions";

function* changeRace({ payload }: AnyAction) {
  yield put(actions.changeCharacterRaceReducer(payload));
}

function* changeOperation({ payload }: AnyAction) {
  yield put(actions.changeOperationTypeReducer(payload));
}

export default function* characters() {
  yield all([
    takeEvery(actions.changeCharacterRace, changeRace),
    takeEvery(actions.changeOperationType, changeOperation),
  ]);
}
