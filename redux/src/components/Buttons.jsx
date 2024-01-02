import { Button } from '@mui/material'

// eslint-disable-next-line react/prop-types
const Buttons = ({ children, handler }) => {
  return (
    <Button variant='contained' color='primary' onClick={handler}>
      {children}
    </Button>
  )
}

export default Buttons
