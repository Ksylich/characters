import { createReducer } from "redux-act";

import ICharactersState from "../types";

const initialState: ICharactersState = {
    race: "human",
    class: "warrior",
    theme: "day",
    background: "",
};

const reducer = createReducer({},initialState);

export default reducer;