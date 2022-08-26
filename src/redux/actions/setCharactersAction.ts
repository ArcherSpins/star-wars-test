import { CharacterType } from "../../types/characterType";
import { SET_CHARACTERS_TYPE, SET_CHARACTERS_ACTION_TYPE, SET_NEXT_CHARACTERS_ACTION_TYPE, SET_NEXT_CHARACTERS_TYPE, SET_ACTIVE_CHARACTER_TYPE, SET_ACTIVE_CHARACTER_ACTION_TYPE } from "../types";

export const setCharacters = (characters: CharacterType[], total: number, paginationQueryParams?: string): SET_CHARACTERS_ACTION_TYPE => ({
    type: SET_CHARACTERS_TYPE,
    payload: {
        characters, total, paginationQueryParams
    }
})

export const setActiveCharacter = (character: CharacterType | null): SET_ACTIVE_CHARACTER_ACTION_TYPE => ({
    type: SET_ACTIVE_CHARACTER_TYPE,
    payload: character
})

export const setNextCharacters = (characters: CharacterType[], total: number, paginationQueryParams?: string): SET_NEXT_CHARACTERS_ACTION_TYPE => ({
    type: SET_NEXT_CHARACTERS_TYPE,
    payload: {
        characters, total, paginationQueryParams
    }
})