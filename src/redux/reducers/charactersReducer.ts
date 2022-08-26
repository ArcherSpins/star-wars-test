import { CharacterType } from "../../types/characterType";
import { SET_ACTIVE_CHARACTER_ACTION_TYPE, SET_ACTIVE_CHARACTER_TYPE, SET_CHARACTERS_ACTION_TYPE, SET_CHARACTERS_TYPE, SET_NEXT_CHARACTERS_ACTION_TYPE, SET_NEXT_CHARACTERS_TYPE } from "../types";

export interface CharactersStateType {
    characters: CharacterType[];
    activeCharacter: CharacterType | null;
    total: number;
    paginationQueryParams: string;
}

const initialState: CharactersStateType = {
    characters: [],
    activeCharacter: null,
    total: 0,
    paginationQueryParams: '',
}


type ActionType = SET_CHARACTERS_ACTION_TYPE | SET_NEXT_CHARACTERS_ACTION_TYPE | SET_ACTIVE_CHARACTER_ACTION_TYPE

const charactersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_CHARACTERS_TYPE:
            return {
                ...state,
                characters: action.payload.characters,
                total: action.payload.total,
                paginationQueryParams: action.payload.paginationQueryParams,
            }
        case SET_NEXT_CHARACTERS_TYPE:
            return {
                ...state,
                characters: [...state.characters, ...action.payload.characters],
                total: action.payload.total,
                paginationQueryParams: action.payload.paginationQueryParams,
            }
        case SET_ACTIVE_CHARACTER_TYPE:
            return {
                ...state,
                activeCharacter: action.payload
            }
        default: return state;
    }
}

export default charactersReducer;
