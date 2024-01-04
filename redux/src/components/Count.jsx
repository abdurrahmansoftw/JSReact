import { Typography } from '@mui/material'

// eslint-disable-next-line react/prop-types
const Count = ({ count, id }) => {
  return (
    <Typography
      variant='h1'
      gutterBottom
      sx={{ display: 'flex', justifyContent: 'center' }}>
      {count} : {id}
    </Typography>
  )
}

export default Count
