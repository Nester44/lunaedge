import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import { Field, Form } from 'formik'
import { TextField } from 'formik-mui'
import Card from '../../Card'
import List from '../../List'
import { TextFieldProps } from 'formik-mui'

const MyInput = (props: TextFieldProps) => {
  return <TextField InputProps={{
    sx: {
      background: '#F8F9FC',
      border: 'none',
      'input': {
        '&::placeholder': {
          color: 'red'
        }
      }
    }
  }} {...props} />
}

const Welcome = () => {
  return (
    <Card
      logo
      title='Welcome to Chad'
      body={`Go live in 10 minutes! Chad's self-service widget empowers your customers to manage orders and track shipments—with Chad, you can offer fast support 24/7 without going crazy.`}
      buttonText='Create account'
      altButtonText="Login"
      altButtonLabel='Already have an account?'
    >

      <Box display='flex' flexDirection='column' gap={3} >
        <Field sx={{ color: 'red' }} fullWidth name='email' component={MyInput} label='Email' />
        <Field sx={{ color: 'red' }} fullWidth name='name' component={MyInput} label='Name' />
        <Field sx={{ color: 'red' }} fullWidth name='password' component={MyInput} label='Password' />
      </Box>
    </Card >
  )
}

export default Welcome