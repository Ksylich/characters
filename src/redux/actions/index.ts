import { createAction } from "redux-act";
const changeCharacterRace = createAction<string>("change_character_race_saga");
const changeOperationType = createAction<string>("change_operation_type_saga");
const changeCharacterClass = createAction<string>("change_character_class_saga");
const changeBackground = createAction<string>("change_background_saga");
const changeTheme = createAction<string>("change_theme_saga");
const changeCharacterAvatar = createAction<string>("change_character_avatar_saga");

const changeCharacterRaceReducer = createAction<string>("change_character_race_reducer");
const changeOperationTypeReducer = createAction<string>("change_operation_type_reducer");
const changeCharacterClassReducer = createAction<string>("change_character_class_reducer");
const changeBackgroundReducer = createAction<string>("change_background_reducer");
const changeThemeReducer = createAction<string>("change_theme_reducer");
const changeCharacterAvatarReducer = createAction<string>("change_character_avatar_reducer");

export {
    changeCharacterRace,
    changeOperationType,
    changeCharacterRaceReducer,
    changeOperationTypeReducer,
    changeCharacterClass,
    changeCharacterClassReducer,
    changeBackground,
    changeBackgroundReducer,
    changeTheme,
    changeThemeReducer,
    changeCharacterAvatar,
    changeCharacterAvatarReducer,
};
