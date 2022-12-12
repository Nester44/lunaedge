import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import List from './List'
import background from '../assets/background.png'
import Card from './Card'
import Welcome from './Forms/Welcome/Welcome'
import Shopify from './Forms/Shopify/Shopify'
import ShopifyConnected from './Forms/Shopify/Connected'
import { Formik, FormikConfig, FormikValues, Form } from 'formik'
import { object } from 'yup'
import { string } from 'yup'
import FormikStep from './FormikStep'
import FormikStepper from './FormikStepper'
import Gmail from './Forms/Gmail/Gmail'

type FormContainerProps = {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
}

const FormContainer = ({ handleBack, handleNext, step }: FormContainerProps) => {

  return (
    <Container
      maxWidth='xl'
      disableGutters
      sx={{
        background: { xs: '#fff', sm: `url(${background})` },
        height: '100%',
        display: 'flex',
      }}
    >
      <FormikStepper
        handleBack={handleBack}
        handleNext={handleNext}
        step={step}
        initialValues={{
          email: '',
          name: '',
          password: '',
          shopifyToken: '',
          googleToken: '',
        }}
        onSubmit={(values) => { console.log(values) }}
      >
        <FormikStep
          validationSchema={object({
            email: string().required('This field cannot be empty'),
            name: string().required('This field cannot be empty'),
            password: string().required('This field cannot be empty'),
          })}
        >
          <Welcome />
        </FormikStep>

        <FormikStep>
          <Shopify />
        </FormikStep>

        <FormikStep>
          <Gmail />
        </FormikStep>
      </FormikStepper>

    </Container >

  )
}

export default FormContainer