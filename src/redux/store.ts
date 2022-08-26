import { createStore } from 'redux';

import reducer from './reducers';
import { CharactersStateType } from './reducers/charactersReducer';

const store = createStore(reducer);

export interface StoreType {
    charactersReducer: CharactersStateType
}

export default store;