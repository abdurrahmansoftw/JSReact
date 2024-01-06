import {
  ADD_TODO,
  ALL_COMPLETED_TODO,
  CLEAR_COMPLETED,
  COLOR_SELECTED,
  DELETE_TODO,
  TOGGLE_TODO,
} from './actionTypes'
import { initialState } from './initialState'

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: nextTodoId(state) }]

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      )

    case COLOR_SELECTED:
      return state.map((todo) =>
        todo.id === action.payload.todoId
          ? { ...todo, color: action.payload.color }
          : todo
      )

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload)

    case ALL_COMPLETED_TODO:
      return state.map((todo) => ({ ...todo, completed: true }))

    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed)

    default:
      return state
  }
}

export default reducer
