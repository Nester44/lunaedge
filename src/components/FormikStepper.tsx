import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import React, { useState } from 'react'
import { Box } from '@mui/material'
import { FormikStepProps } from './FormikStep';

interface Props extends FormikConfig<FormikValues> {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
}

const FormikStepper = ({ children, handleBack, handleNext, step, ...props }: Props) => {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[]
  const currentChild = childrenArray[step]
  const isLastStep = () => step === childrenArray.length - 1

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers)
        } else {
          handleNext()
        }
      }}
    >
      <Box component={Form} width='100%'>
        {currentChild}
      </Box>
    </Formik>
  )
}

export default FormikStepper