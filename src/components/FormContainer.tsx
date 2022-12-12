import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import List from './List'
import background from '../assets/background.png'
import Card from './Card'
import Welcome from './Forms/Welcome/Welcome'
import Shopify, { IShopifyStep } from './Forms/Shopify/Shopify'
import ShopifyConnected from './Forms/Shopify/Connected'
import { Formik, FormikConfig, FormikValues, Form } from 'formik'
import { object } from 'yup'
import { string } from 'yup'
import FormikStep from './FormikStep'
import FormikStepper from './FormikStepper'
import Gmail, { IGmailState } from './Forms/Gmail/Gmail'
import { BASE_URL } from '../shared/constants'
import { useNavigate } from 'react-router-dom'

type FormContainerProps = {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
}

export interface IStepsState {
  shopify: IShopifyStep,
  google: IGmailState,
}

const FormContainer = ({ handleBack, handleNext, step }: FormContainerProps) => {
  const navigate = useNavigate()

  const [stepsState, setStepsState] = useState
    <IStepsState>({ shopify: { token: '', shop_name: '', shop_logo_url: '' }, google: { token: '' } })

  const setShopifyState = (state: IShopifyStep) => {
    setStepsState(prev => ({ ...prev, shopify: { ...state } }))
  }

  const setGoogleState = (state: IGmailState) => {
    setStepsState(prev => ({ ...prev, google: { ...state } }))
  }

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

        }}
        onSubmit={async (values) => {
          const response = await fetch(BASE_URL + '/google')
          const json = await response.json()
          setGoogleState(json)
          const body = { ...values, shop_token: stepsState.shopify.token, google_token: stepsState.google.token }
          const res = await fetch(
            BASE_URL + '/register',
            {
              method: 'POST',
              body: JSON.stringify(body),
            }
          )
          navigate('/completed')
        }}
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
          <Shopify stepState={stepsState.shopify} setStepState={setShopifyState} />
        </FormikStep>

        <FormikStep>
          <Gmail setStepState={setGoogleState} />
        </FormikStep>
      </FormikStepper>

    </Container >

  )
}

export default FormContainer