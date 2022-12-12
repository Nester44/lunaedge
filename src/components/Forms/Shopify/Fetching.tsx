import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

type Props = {}

const Fetching = (props: Props) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#fff',

      }}
    >
      <Typography variant='h6'>
        Connecting to Shopify...
      </Typography>
    </Box>
  )
}

export default Fetching