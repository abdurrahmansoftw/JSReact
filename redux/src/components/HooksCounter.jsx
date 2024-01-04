import { Box, Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Buttons from './Buttons'
import Count from './Count'

// eslint-disable-next-line react/prop-types
const HooksCounter = ({ id }) => {
  const count = useSelector((state) => state.value)
  const dispatch = useDispatch()

  const increment = (value) => dispatch(increment(value))
  const decrement = (value) => dispatch(decrement(value))
  const reset = () => dispatch(reset())
  return (
    <Box>
      <Paper sx={{ p: 2, my: 5 }} elevation={2}>
        <Count count={count} id={id} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Buttons handler={increment}> + </Buttons>
          <Buttons handler={reset}> Reset </Buttons>
          <Buttons handler={decrement}> - </Buttons>
        </Box>
      </Paper>
    </Box>
  )
}

export default HooksCounter
