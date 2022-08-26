import { createSelector } from 'reselect';
import { StoreType } from '../store';

export const charactersSelector = createSelector(
    (state: StoreType) => state.charactersReducer.characters,
    (characters) => characters.map((item, idx) => ({ ...item, id: idx + 1 }))
)

export const activeCharacterSelector = createSelector(
    (state: StoreType) => state.charactersReducer.activeCharacter,
    (activeCharacter) => activeCharacter
)

export const charactersTotalSelector = createSelector(
    (state: StoreType) => state.charactersReducer.total,
    (total) => total
)

export const charactersPaginationQueryParamsSelector = createSelector(
    (state: StoreType) => state.charactersReducer.paginationQueryParams,
    (paginationQueryParams) => paginationQueryParams
)