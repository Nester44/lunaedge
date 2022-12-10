import React from 'react'
import Card from '../../Card'
import shopAvatarImage from '../../../assets/shopAva.png'
import check from '../../../assets/shopCheck.png'
import { Box } from '@mui/system'

type Props = {}

const ShopAvatar = () => {
  return <Box display='flex' justifyContent='center'  >
    <Box position='relative'>
      <img src={shopAvatarImage} />
      <img src={check} style={{ position: 'absolute', right: 0, top: 0 }} />
    </Box>
  </Box>
}

const ShopifyConnected = (props: Props) => {
  return (
    <Card
      title='Store connected'
      body='Chad is now able to manage customer support requests for [STORE-NAME].'
      buttonText='Continue'
      altButtonLabel='Wrong store?'
      altButtonText='Connect another one'
      centerText
      childrenOnTop={<ShopAvatar />}
      paddingX={10.5}
      paddingY={15}
    >

    </Card>
  )
}

export default ShopifyConnected