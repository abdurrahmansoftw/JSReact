import { Container, Typography } from '@mui/material'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import Stats from './components/Stats'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth='lg'>
        <Typography variant='h2' align='center' gutterBottom>
          Counter App
        </Typography>
        {state.map((count, index) => (
          <Counter
            key={index}
            id={count.id}
            count={count.count}
            increment={increment}
            decrement={decrement}
          />
        ))}

        <Stats count={totalCount()} />
      </Container>
    </Provider>
  )
}

export default App
