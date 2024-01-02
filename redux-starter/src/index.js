import store from './store'

store.subscribe(() => {
  console.log('Store changed!', store.getState())
})

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'Bug1',
  },
}) // { counter: 0 }
