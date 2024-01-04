import { Box, Paper } from '@mui/material'
import { connect } from 'react-redux'
import { decrement, increment, reset } from '../redux/counter/actions'
import Buttons from './Buttons'
import Count from './Count'

// eslint-disable-next-line react/prop-types
const Counter = ({ increment, decrement, count }) => {
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
  console.log(ownProps)
  return {
    count: state.value,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
    reset: () => dispatch(reset()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
