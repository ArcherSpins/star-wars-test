import { CharacterType } from "../types";

export const SET_CHARACTERS_TYPE = "SET_CHARACTERS_TYPE";
export const SET_NEXT_CHARACTERS_TYPE = "SET_NEXT_CHARACTERS_TYPE";
export const SET_ACTIVE_CHARACTER_TYPE = "SET_ACTIVE_CHARACTER_TYPE";

export interface SET_ACTIVE_CHARACTER_ACTION_TYPE {
    type: typeof SET_ACTIVE_CHARACTER_TYPE,
    payload: CharacterType | null;
}

export interface SET_CHARACTERS_ACTION_TYPE {
    type: typeof SET_CHARACTERS_TYPE,
    payload: {
        characters: CharacterType[];
        total: number;
        paginationQueryParams?: string;
    };
}

export interface SET_NEXT_CHARACTERS_ACTION_TYPE {
    type: typeof SET_NEXT_CHARACTERS_TYPE,
    payload: {
        characters: CharacterType[];
        total: number;
        paginationQueryParams?: string;
    };
}
