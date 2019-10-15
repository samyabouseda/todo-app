import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'
const TODOS_URL = `${BASE_URL}/todos`

const fetchTodos = () =>
    axios.get(TODOS_URL)
        .then(response => response.data)

export const Api = {
    fetchTodos,
}