import { Button, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react'
import ArrowLeft from '../assets/icon_chevron-left.png';
import ArrowRight from '../assets/icon_chevron-right.png';
import MyButton from './MyButton';

type Props = {}

const steps = [
  'Welcome',
  'Connect your Shopify store',
  'Connect your customer support email',
  'Done',
]

const MyStepper = (props: Props) => {
  const [activeStep, setActiveStep] = useState<number>(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Box>
      <Stepper activeStep={activeStep} orientation='vertical'>
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
        <MyButton startIcon={<img src={ArrowLeft} />} onClick={handleBack}>
          Prev
        </MyButton>
        <MyButton endIcon={<img src={ArrowRight} />} onClick={handleNext}>
          Next
        </MyButton>
      </Box>
    </Box>
  )
}

export default MyStepper