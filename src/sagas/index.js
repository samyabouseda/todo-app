import { takeEvery, all, call, put } from 'redux-saga/effects'
import { ActionTypes } from "../constants"
import { doFetchTodosSucceeded, doFetchTodosFailed } from "../actions"
import { Api } from '../api/todos'

function* watchAll() {
    yield all([
        takeEvery(ActionTypes.TODOS_FETCH_REQUESTED, fetchTodos)
    ])
}

function* fetchTodos() {
    try {
        const result = yield call(Api.fetchTodos)
        yield put(doFetchTodosSucceeded(result))
    } catch (error) {
        yield put(doFetchTodosFailed(error))
    }
}

export default watchAll