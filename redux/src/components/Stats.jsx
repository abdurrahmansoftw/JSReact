import { Paper, Typography } from '@mui/material'

// eslint-disable-next-line react/prop-types
const Stats = ({ count }) => {
  return (
    <Paper sx={{ p: 3, my: 5 }} elevation={5}>
      <Typography
        variant='h4'
        gutterBottom
        sx={{ display: 'flex', justifyContent: 'center' }}>
        Total Count: {count}
      </Typography>
    </Paper>
  )
}

export default Stats
