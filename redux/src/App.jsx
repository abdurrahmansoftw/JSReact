import { Container, Typography } from '@mui/material'
import { Provider } from 'react-redux'
import DynamicHooksCounter from './components/DynamicHooksCounter'
import Stats from './components/Stats'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth='lg'>
        <Typography variant='h2' align='center' gutterBottom>
          Simple Counter Application
        </Typography>

        <DynamicHooksCounter id='1' />

        <Stats />
      </Container>
    </Provider>
  )
}

export default App
