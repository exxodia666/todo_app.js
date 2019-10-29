import * as actions from './actions'

export const addTodo = (payload) => {
    return {
        type: actions.ADD_TODO,
        data: payload
    }
}

export const deleteTodo = (payload) => {
    return {
        type: actions.DELETE_TODO,
        data: payload
    }
}

export const reverseTodo = (payload) => {
    return {
        type: actions.REVERSE_TODO,
        data: payload
    }
}
