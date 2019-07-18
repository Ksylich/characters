import { createAction } from "redux-act";
const changeCharacterRace = createAction<string>("change_character_race_saga");
const changeOperationType = createAction<string>("change_operation_type_saga");

const changeCharacterRaceReducer = createAction<string>("change_character_race_reducer");
const changeOperationTypeReducer = createAction<string>("change_operation_type_reducer");

export {
    changeCharacterRace,
    changeOperationType,
    changeCharacterRaceReducer,
    changeOperationTypeReducer,
};
