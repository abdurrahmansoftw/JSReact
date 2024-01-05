import { applyMiddleware, createStore } from 'redux'
import rootReducer from './rootReducer'

const myLogger = (store) => (next) => (action) => {
  console.log('Logged Action: ', JSON.stringify(action))
  console.log('State: ', JSON.stringify(store.getState()))

  const upCommingState = [action].reduce(rootReducer, store.getState())
  console.log('Up Comming State: ', JSON.stringify(upCommingState))

  return next(action)
}

const store = createStore(rootReducer, applyMiddleware(myLogger))

export default store
