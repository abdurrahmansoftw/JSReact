import {
  ADD_TODO,
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
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )

    case COLOR_SELECTED:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, color: action.payload.color }
          : todo
      )

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id)

    default:
      return state
  }
}

export default reducer
