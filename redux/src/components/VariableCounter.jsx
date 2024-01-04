import { Box, Paper } from '@mui/material'
import { connect } from 'react-redux'
import { decrement, increment, reset } from '../redux/counter/actions'
import {
  decrement as dynamicDecrement,
  increment as dynamicIncrement,
  reset as dynamicReset,
} from '../redux/dynamicCounter/actions'
import Buttons from './Buttons'
import Count from './Count'

// eslint-disable-next-line react/prop-types
const VariableCounter = ({ increment, decrement, count }) => {
  return (
    <Box>
      <Paper sx={{ p: 2, my: 5 }} elevation={2}>
        <Count count={count} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Buttons handler={increment}> + </Buttons>
          <Buttons handler={reset}> Reset </Buttons>
          <Buttons handler={decrement}> - </Buttons>
        </Box>
      </Paper>
    </Box>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: (value) =>
      dispatch(ownProps.dynamic ? dynamicIncrement(value) : increment(value)),
    decrement: (value) =>
      dispatch(ownProps.dynamic ? dynamicDecrement(value) : decrement(value)),
    reset: () => dispatch(ownProps.dynamic ? dynamicReset() : reset()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter)
