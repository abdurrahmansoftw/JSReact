import { Box, Paper } from '@mui/material'
import { connect } from 'react-redux'
import { decrement, increment, reset } from '../redux/counter/actions'
import {
  increment as DynamicIncrement,
  decrement as dynamicDecrement,
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
    increment: ownProps.dynamic
      ? (value) => dispatch(DynamicIncrement(value))
      : (value) => dispatch(increment(value)),
    decrement: ownProps.dynamic
      ? (value) => dispatch(dynamicDecrement(value))
      : (value) => dispatch(decrement(value)),
    reset: ownProps.dynamic
      ? (value) => dispatch(dynamicReset(value))
      : (value) => dispatch(reset(value)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter)
