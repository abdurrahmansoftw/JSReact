const initialState = {
  value: 0,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + action.payload }
    case 'DECREMENT':
      return { ...state, value: state.value - action.payload }
    case 'RESET':
      return { ...state, value: 0 }
    default:
      return state
  }
}

export default counterReducer
