import { ActionTypes } from "../constants"

let nexTodoId = 0
const doAddTodo = title => ({
    type: ActionTypes.ADD_TODO,
    id: nexTodoId++,
    title
})

const doSetVisibilityFilter = filter => ({
    type: ActionTypes.SET_VISIBILITY_FILTER,
    filter
})

const doToggleTodo = id => ({
    type: ActionTypes.TOGGLE_TODO,
    id
})

const doFetchTodosRequested = () => ({
    type: ActionTypes.TODOS_FETCH_REQUESTED
})

const doFetchTodosSucceeded = todos => ({
    type: ActionTypes.TODOS_FETCH_SUCCEEDED,
    todos
})

const doFetchTodosFailed = error => ({
    type: ActionTypes.TODOS_FETCH_FAILED,
    error
})

export {
    doAddTodo,
    doSetVisibilityFilter,
    doToggleTodo,
    doFetchTodosRequested,
    doFetchTodosSucceeded,
    doFetchTodosFailed,
}