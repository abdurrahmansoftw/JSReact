import { Container, Typography } from '@mui/material'
import { Provider } from 'react-redux'
import DynamicHooksCounter from './components/DynamicHooksCounter'
import HooksCounter from './components/HooksCounter'
import Stats from './components/Stats'
import VariableCounter from './components/VariableCounter'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth='lg'>
        <Typography variant='h2' align='center' gutterBottom>
          Simple Counter Application
        </Typography>

        <HooksCounter id='1' />
        <DynamicHooksCounter id='1' />
        <VariableCounter dynamic={true} />

        <Stats />
      </Container>
    </Provider>
  )
}

export default App
