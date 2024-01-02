import store from './store'

const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState())
})

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'Bug1',
  },
}) // { counter: 0 }

unsubscribe()

store.dispatch({
  type: 'bugRemoved',
  payload: {
    description: 'Bug1',
  },
}) // { counter: 0 }
