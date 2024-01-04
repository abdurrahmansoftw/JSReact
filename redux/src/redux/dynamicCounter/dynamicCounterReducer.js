import { DDECREMENT, DINCREMENT, DRESET } from './actionTypes'

const initialState = {
  value: 0,
}

const dynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return { ...state, value: state.value + action.payload }
    case DDECREMENT:
      return { ...state, value: state.value - action.payload }
    case DRESET:
      return { ...state, value: 0 }
    default:
      return state
  }
}

export default dynamicCounterReducer
