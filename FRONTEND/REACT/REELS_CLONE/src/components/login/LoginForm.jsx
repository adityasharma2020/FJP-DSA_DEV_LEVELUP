import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

function LoginForm() {
  return (
    <>
      <img src='logo.png' height='100px' style={{ color: 'white' }} />
      <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper variant='outlined' />
        <Paper variant='outlined' square />
      </Box>
    </>
  )
}

export default LoginForm
