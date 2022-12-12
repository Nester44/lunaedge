import React from 'react'
import Card from '../../Card'
import shopAvatarImage from '../../../assets/shopAva.png'
import check from '../../../assets/shopCheck.png'
import { Box } from '@mui/system'

type ShopifyConnectedProps = {
  shopName: string;
  shopLogo: string;
}

type ShopAvatarProps = {
  shopLogo: string;
}

const ShopAvatar = ({ shopLogo }: ShopAvatarProps) => {
  return <Box display='flex' justifyContent='center'  >
    <Box position='relative'>
      <img src={shopLogo} style={{ width: '80px', borderRadius: '50%' }} />
      <img src={check} style={{ position: 'absolute', right: 0, top: 0 }} />
    </Box>
  </Box>
}

const ShopifyConnected = ({ shopName, shopLogo }: ShopifyConnectedProps) => {
  console.log(shopName)
  return (
    <Card
      title='Store connected'
      body={`Chad is now able to manage customer support requests for ${shopName.toUpperCase()}.`}
      buttonText='Continue'
      altButtonLabel='Wrong store?'
      altButtonText='Connect another one'
      centerText
      childrenOnTop={<ShopAvatar shopLogo={shopLogo} />}
      paddingX={10.5}
      paddingY={15}
    >

    </Card>
  )
}

export default ShopifyConnected