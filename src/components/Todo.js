import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, title, completed }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {title}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
}

export default Todo
