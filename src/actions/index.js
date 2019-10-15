import { ActionTypes } from "../constants"

let nexTodoId = 0
const doAddTodo = text => ({
    type: ActionTypes.ADD_TODO,
    id: nexTodoId++,
    text
})

const doSetVisibilityFilter = filter => ({
    type: ActionTypes.SET_VISIBILITY_FILTER,
    filter
})

const doToggleTodo = id => ({
    type: ActionTypes.TOGGLE_TODO,
    id
})

export {
    doAddTodo,
    doSetVisibilityFilter,
    doToggleTodo,
}