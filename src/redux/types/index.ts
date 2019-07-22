export interface ICharacter {
    race: string;
    class: string;
    avatar: string;
}

export  interface ICharactersState {
    character: ICharacter;
    theme: string;
    background: string;
    operationType: string;
}