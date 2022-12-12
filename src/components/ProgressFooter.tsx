import Box from '@mui/material/Box'
import { Stack } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'

type Props = {}

const ProgressFooter = (props: Props) => {
  return (
    <Stack
      spacing={2}
      direction='row'
      alignItems='center'
      sx={{
        background: '#134267',
        p: 2,
        borderRadius: 2,
      }}
    >
      <Typography fontWeight={700} fontSize={32} variant="body1" color="#96CAF7">5X</Typography>
      <Typography fontSize={14} variant="body1" color="#96CAF7">Acquiring a new customer is 5x more costly than making an unhappy customer happy</Typography>
    </Stack>
  )
}

export default ProgressFooter