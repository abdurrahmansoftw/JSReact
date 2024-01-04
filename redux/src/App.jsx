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
          Simple Counter Application
        </Typography>

        <Counter id='1' />

        <Stats />
      </Container>
    </Provider>
  )
}

export default App
