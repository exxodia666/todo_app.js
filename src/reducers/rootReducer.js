import * as actions from '../actions/actions'
import { persistedState } from '../Store';

export function rootReducer(state = persistedState, action) {
    switch (action.type) {

        case actions.ADD_TODO: 
            return [...state, {id: ++state.length, text: action.data, completed: false}];

        case actions.DELETE_TODO:
            let newState = state;
            ///console.log(action.data);
            newState.splice(action.data, 1);
            return [...newState];

        case actions.COMPLETE_TODO: 
            return { };

        case actions.REVERSE_TODO: 
            let id = action.data.id;
            let completed = action.data.completed;
            if( completed === false ){ 
                const newState = state;
                newState[id].completed = true;
                console.log(newState);
                return [...newState];
            } else if ( completed === true){
                const newState = state;
                newState[id].completed = false;
                console.log(newState);
                return [...newState];
            } else { 
                return [...state]}

           

        default: return state;
    } 
}


