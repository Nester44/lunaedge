import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Step, StepLabel, Stepper } from '@mui/material'
import MyStepper from './MyStepper'
import ProgressFooter from './ProgressFooter'

const Progress = () => {
  return (
    <Box
      height='100%'
      sx={{
        background: 'linear-gradient(339.02deg, #0D3251 0%, #19476C 103.05%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 7,
        paddingTop: 25,
        alignItems: 'center',
      }}
    >
      <MyStepper />
      <ProgressFooter />
    </Box>
  )
}

export default Progress