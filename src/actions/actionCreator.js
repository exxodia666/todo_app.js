import * as actions from './actions'
//add todo tip action creator
export const addTodo = (payload) => {
    return {
        type: actions.ADD_TODO,
        data: payload
    }
}
//delete todo tip action creator
export const deleteTodo = (payload) => {
    return {
        type: actions.DELETE_TODO,
        data: payload
    }
}
//make todo tip completed/active action creator
export const reverseTodo = (payload) => {
    return {
        type: actions.REVERSE_TODO,
        data: payload
    }
}
