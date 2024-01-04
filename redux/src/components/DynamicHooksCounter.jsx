import { Box, Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/dynamicCounter/actions'
import Buttons from './Buttons'
import Count from './Count'

// eslint-disable-next-line react/prop-types
const DynamicHooksCounter = ({ id }) => {
  const count = useSelector((state) => state.dynamicCounter.value)
  const dispatch = useDispatch()

  const incrementHandler = (value) => {
    dispatch(increment(value))
  }
  const decrementHandler = (value) => {
    dispatch(decrement(value))
  }
  const resetHandler = (value) => {
    dispatch(reset(value))
  }

  return (
    <Box>
      <Paper sx={{ p: 2, my: 5 }} elevation={2}>
        <Count count={count} id={id} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Buttons handler={() => incrementHandler(5)}> + </Buttons>
          <Buttons handler={() => resetHandler(0)}> Reset </Buttons>
          <Buttons handler={() => decrementHandler(2)}> - </Buttons>
        </Box>
      </Paper>
    </Box>
  )
}

export default DynamicHooksCounter
