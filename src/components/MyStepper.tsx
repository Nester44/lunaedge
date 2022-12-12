import { Button, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react'
import ArrowLeft from '../assets/icon_chevron-left.png';
import ArrowRight from '../assets/icon_chevron-right.png';
import MyButton from './MyButton';

type Props = {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
  isLastStep: () => boolean;
  isStepCompleted: () => boolean;
  isFirstStep: () => boolean;
}

const steps = [
  'Welcome',
  'Connect your Shopify store',
  'Connect your customer support email',
  'Done',
]

const MyStepper = ({ step, handleBack, handleNext, isLastStep, isStepCompleted: isStepCompleted, isFirstStep }: Props) => {
  return (
    <Box>
      <Stepper activeStep={step} orientation='vertical'>
        {
          steps.map(step =>
            <Step key={step} >
              <StepLabel>
                <Typography variant='body1'>
                  {step}
                </Typography>
              </StepLabel>
            </Step>
          )
        }

      </Stepper>
      <Box display='flex' mt={6} justifyContent='space-between' >
        <MyButton disabled={isFirstStep()} startIcon={<img src={ArrowLeft} />} onClick={handleBack}>
          Prev
        </MyButton>
        {
          isLastStep() || <MyButton disabled={!isStepCompleted()} endIcon={<img src={ArrowRight} />} onClick={handleNext}>
            Next
          </MyButton>
        }
      </Box>
    </Box>
  )
}

export default MyStepper