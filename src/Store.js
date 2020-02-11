import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer'
import { loadState, saveState } from './sessionStorage';

export const persistedState = loadState();

export const Store = createStore(rootReducer, persistedState);

Store.subscribe( () => { saveState(Store.getState())});