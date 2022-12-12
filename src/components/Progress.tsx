import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Step, StepLabel, Stepper } from '@mui/material'
import MyStepper from './MyStepper'
import ProgressFooter from './ProgressFooter'

type Props = {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
  isLastStep: () => boolean;
  isStepCompleted: () => boolean;
  isFirstStep: () => boolean;
}

const Progress = ({ step, handleBack, handleNext, isLastStep, isStepCompleted, isFirstStep }: Props) => {
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
      <MyStepper isLastStep={isLastStep} step={step} handleBack={handleBack} handleNext={handleNext} isStepCompleted={isStepCompleted} isFirstStep={isFirstStep} />
      <ProgressFooter />
    </Box>
  )
}

export default Progress