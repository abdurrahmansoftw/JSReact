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
        
        <Counter />

        <Stats />
      </Container>
    </Provider>
  )
}

export default App
