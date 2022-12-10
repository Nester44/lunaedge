import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import List from './List'
import background from '../assets/background.png'
import Card from './Card'
import Welcome from './Forms/Welcome/Welcome'
import Shopify from './Forms/Shopify/Shopify'
import ShopifyConnected from './Forms/Shopify/ShopifyConnected'

const FormContainer = () => {

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
      {/* <Welcome /> */}
      {/* <Shopify /> */}
      <ShopifyConnected />
    </Container>

  )
}

export default FormContainer