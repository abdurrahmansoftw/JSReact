import { Box, Paper } from '@mui/material'
import Buttons from './Buttons'
import Count from './Count'

// eslint-disable-next-line react/prop-types
const Counter = ({ id, increment, decrement, count }) => {
  return (
    <Box>
      <Paper sx={{ p: 2, my: 5 }} elevation={2}>
        <Count count={count} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Buttons handler={() => increment(id)}> + </Buttons>
          <Buttons handler={() => decrement(id)}> - </Buttons>
        </Box>
      </Paper>
    </Box>
  )
}

export default Counter
