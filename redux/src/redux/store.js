import { createStore } from 'redux'
import dynamicCounterReducer from './dynamicCounter/dynamicCounterReducer'

const store = createStore(dynamicCounterReducer)

export default store
