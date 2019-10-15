import { connect } from 'react-redux'
import { doToggleTodo } from "../actions"
import { getVisibleTodos } from "../selectors/todos"
import TodoList from "../components/TodoList"

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    onTodoClick: id => dispatch(doToggleTodo(id+1))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)