import { Typography } from '@mui/material'

// eslint-disable-next-line react/prop-types
const Count = ({ count }) => {
  return (
    <Typography
      variant='h2'
      gutterBottom
      sx={{ display: 'flex', justifyContent: 'center' }}>
      {count}
    </Typography>
  )
}

export default Count
