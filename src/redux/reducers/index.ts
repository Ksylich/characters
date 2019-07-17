import { createReducer } from "redux-act";

import { ICharactersState } from "../types";

const initialState: ICharactersState = {
  character: {
    race: "human",
    class: "warrior",
  },
  theme: "day",
  background: "#FAFDFB",
  operationType: "race",
};

const reducer = createReducer({}, initialState);

export default reducer;
