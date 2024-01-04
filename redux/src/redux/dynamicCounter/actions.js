import { DDECREMENT, DINCREMENT, DRESET } from './actionTypes'

export const increment = (value) => {
  return { type: DINCREMENT, payload: value }
}

export const decrement = (value) => {
  return { type: DDECREMENT, payload: value }
}

export const reset = () => {
  return { type: DRESET }
}
