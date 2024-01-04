import { DDECREMENT, DINCREMENT, DRESET } from './actionTypes'

const initialState = {
  value: 0,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return { ...state, value: state.value + 1 }
    case DDECREMENT:
      return { ...state, value: state.value - 1 }
    case DRESET:
      return { ...state, value: 0 }
    default:
      return state
  }
}

export default counterReducer
