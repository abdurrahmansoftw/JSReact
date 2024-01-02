import { Box, Button, Paper, Typography } from '@mui/material'

const Counter = () => {
  return (
    <Box>
      <Paper sx={{ p: 2, m: 5 }} elevation={2}>
        <Typography
          variant='h2'
          gutterBottom
          sx={{ display: 'flex', justifyContent: 'center' }}>
          0
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant='contained' color='primary'>
            +
          </Button>
          <Button variant='contained' color='warning'>
            -
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default Counter
