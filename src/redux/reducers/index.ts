import { createReducer } from "redux-act";

import * as actions from "../actions";
import { ICharactersState } from "../types";

const initialState: ICharactersState = {
  character: {
    race: "Human",
    class: "Warrior",
  },
  theme: "day",
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
        race: payload,
        class: character.class,
      },
    };
  },
  [actions.changeOperationTypeReducer as any]: (state, payload) => ({
    ...state,
    operationType: payload,
  }),
}, initialState);

export default reducer;
