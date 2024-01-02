import { Container } from '@mui/material'
import { useState } from 'react'
import Counter from './components/Counter'
import Stats from './components/Stats'

const initilizeState = [
  { id: 1, count: 0 },
  { id: 2, count: 0 },
]

const App = () => {
  const [state, setState] = useState(initilizeState)

  const totalCount = () => state.reduce((acc, curr) => acc + curr.count, 0)

  const increment = (id) => {}

  const decrement = (id) => {}

  return (
    <Container maxWidth='lg'>
      <Counter />

      <Stats count={totalCount()} />
    </Container>
  )
}

export default App
