import * as actions from './actions'
import store from './store'

store.subscribe(() => console.log(store.getState()))

store.dispatch(actions)

console.log(store.getState())
