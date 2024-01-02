import { Box, Button, Paper, Typography } from '@mui/material'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <Box>
      <Paper sx={{ p: 2, m: 5 }} elevation={3}>
        <Typography
          variant='h1'
          gutterBottom
          sx={{ display: 'flex', justifyContent: 'center' }}>
          {count}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant='contained' color='primary' onClick={increment}>
            +
          </Button>
          <Button variant='contained' color='warning' onClick={decrement}>
            -
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default Counter
