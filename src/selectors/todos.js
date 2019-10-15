import { VisibilityFilters } from "../constants"

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL: return todos
        case VisibilityFilters.SHOW_COMPLETED: return todos.filter(isCompleted())
        case VisibilityFilters.SHOW_ACTIVE: return todos.filter(isActive())
        default: throw new Error('Unknown filter: ' + filter)
    }
}

const isCompleted = () => todo => todo.completed
const isActive = () => todo => !todo.completed

export {
    getVisibleTodos,
}