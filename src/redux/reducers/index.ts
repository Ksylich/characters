import { createReducer } from "redux-act";

import * as actions from "../actions";
import { ICharactersState } from "../types";

const initialState: ICharactersState = {
  character: {
    race: "Human",
    class: "Warrior",
    avatar: " ",
  },
  theme: "#FFF9F9",
  background: "#FAFDFB",
  operationType: "race",
};

const reducer = createReducer(
  {
  [actions.changeCharacterRaceReducer as any]: (state, payload) => {
    const { character } = state;
    return {
      ...state,
      character: {
        ...character,
        race: payload,
      },
    };
  },
  [actions.changeOperationTypeReducer as any]: (state, payload) => ({
    ...state,
    operationType: payload,
  }),
  [actions.changeCharacterClassReducer as any]: (state, payload) => {
    const { character } = state;
    return {
      ...state,
      character: {
        ...character,
        class: payload,
      },
    };
  },
  [actions.changeBackgroundReducer as any]: (state, payload) => ({
    ...state,
    background: payload,
  }),
  [actions.changeThemeReducer as any]: (state, payload) => ({
    ...state,
    theme: payload,
  }),
  [actions.changeCharacterAvatarReducer as any]: (state, payload) => {
    const { character } = state;
    return {
      ...state,
      character: {
       ...character,
        avatar: payload,
      },
    };
  },
}, initialState);

export default reducer;
