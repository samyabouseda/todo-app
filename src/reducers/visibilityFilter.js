import { VisibilityFilters, ActionTypes } from "../constants"

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case ActionTypes.SET_VISIBILITY_FILTER: return applySetVisibilityFilter(state, action)
        default: return state
    }
}

const applySetVisibilityFilter = (state, action) => action.filter

export default visibilityFilter