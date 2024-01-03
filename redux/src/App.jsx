import { Container, Typography } from '@mui/material'
import { useState } from 'react'
import Counter from './components/Counter'
import Stats from './components/Stats'

const initilizeState = [{ id: 1, count: 0 }]

const App = () => {
  const [state, setState] = useState(initilizeState)

  const totalCount = () => state.reduce((acc, curr) => acc + curr.count, 0)

  const increment = (id) => {
    const updatedCounter = state.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 }
      }
      return item
    })
    setState(updatedCounter)
  }

  const decrement = (id) => {
    const updatedCounter = state.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count - 1 }
      }
      return item
    })
    setState(updatedCounter)
  }

  return (
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
  )
}

export default App
