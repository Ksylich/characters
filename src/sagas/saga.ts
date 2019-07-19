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

function* changeClass({ payload }: AnyAction) {
  yield put(actions.changeCharacterClassReducer(payload));
}

function* changeBack({ payload }: AnyAction) {
  yield put(actions.changeBackgroundReducer(payload));
}

function* chandeThemeBack({ payload }: AnyAction) {
  yield put(actions.changeThemeReducer(payload));
}

export default function* characters() {
  yield all([
    takeEvery(actions.changeCharacterRace, changeRace),
    takeEvery(actions.changeOperationType, changeOperation),
    takeEvery(actions.changeCharacterClass, changeClass),
    takeEvery(actions.changeBackground, changeBack),
    takeEvery(actions.changeTheme, chandeThemeBack),
  ]);
}
