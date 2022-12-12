import { FormikConfig, FormikValues } from 'formik'
import React from 'react'

export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {

}

const FormikStep = ({ children }: FormikStepProps) => {
  return <>{children}</>
}

export default FormikStep