import { ActionTypes } from "../constants"

const todos = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO: return applyAddTodo(state, action)
        case ActionTypes.TOGGLE_TODO: return applyToggleTodo(state, action)
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

export default todos