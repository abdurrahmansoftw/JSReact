import {
  ADD_TODO,
  ALL_COMPLETED_TODO,
  CLEAR_COMPLETED,
  COLOR_SELECTED,
  DELETE_TODO,
  TOGGLE_TODO,
} from './actionTypes'

export const added = (todoText) => {
  return {
    type: ADD_TODO,
    payload: todoText,
  }
}

export const toggle = (todoId) => {
  return {
    type: TOGGLE_TODO,
    payload: todoId,
  }
}

export const colorSelected = (todoId, color) => {
  return {
    type: COLOR_SELECTED,
    payload: { todoId, color },
  }
}

export const deleted = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  }
}

export const allCompleted = () => {
  return {
    type: ALL_COMPLETED_TODO,
  }
}

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  }
}
