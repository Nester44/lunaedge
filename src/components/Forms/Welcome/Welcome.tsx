import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import { Field, Form } from 'formik'
import { TextField } from 'formik-mui'
import Card from '../../Card'
import List from '../../List'

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
        <Field fullWidth name='email' component={TextField} label='Email' variant='filled' />
        <Field fullWidth name='name' component={TextField} label='Name' variant='filled' />
        <Field fullWidth name='password' component={TextField} label='Password' variant='filled' />
      </Box>
    </Card >
  )
}

export default Welcome