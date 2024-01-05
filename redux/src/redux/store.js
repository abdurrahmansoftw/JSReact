import { applyMiddleware, createStore } from 'redux'
import rootReducer from './rootReducer'

const myLogger = (store) => (next) => (action) => {
  console.log('Logged Action: ', JSON.stringify(action))
  console.log('State: ', JSON.stringify(store.getState()))
  return next(action)
}

const store = createStore(rootReducer, applyMiddleware(myLogger))

export default store
