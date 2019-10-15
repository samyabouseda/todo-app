import { ActionTypes } from "../constants"

const INITIAL_STATE = []

const todos = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO: return applyAddTodo(state, action)
        case ActionTypes.TOGGLE_TODO: return applyToggleTodo(state, action)
        case ActionTypes.TODOS_FETCH_SUCCEEDED: return applyTodosFetchSucceeded(state, action)
        default: return state
    }
}

const applyAddTodo = (state, action) => (
    [
        ...state,
        {
            id: action.id,
            text: action.text,
            completed: false
        }
    ]
)

const applyToggleTodo = (state, action) => (
    state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    )
)

const applyTodosFetchSucceeded = (state, action) => action.todos


export default todos