import React from 'react'
import { Box } from '@mui/material'
import bg from '../assets/bg.png'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MyButton from '../components/MyButton'
import { maxWidth } from '@mui/system'

type Props = {}

const Completed = (props: Props) => {
  return (
    <Box
      sx={{
        background: '#0E1C27',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        sx={{
          paddingY: 6,
          paddingX: 5,
          maxWidth: '434px',
        }}
      >
        <Typography my={3} color='#20496C' fontSize={24} fontWeight='700' >You’re ready to go! 🚀</Typography>
        <Typography mb={3} color='#20496C' >A fully loaded self-service portal is now ready to deploy on your Shopify store.</Typography>
        <Typography mb={3} color='#20496C' >We’ve programmed it to follow industry best practices for shipping, return & exchange, and payment policy.</Typography>
        <Typography mb={3} color='#20496C' >You can customize these settings to fit your store policy anytime.</Typography>
        <Typography color='#20496C' >Lastly, <strong>nothing is live until you hit “Go Live”!</strong></Typography>

        <Button
          size='large'
          sx={{
            borderRadius: 2,
            marginTop: 2,
          }}
          fullWidth
          variant='contained'
          color='primary'
          disableElevation
        >
          Start customizing
        </Button>
      </Paper>
    </Box >
  )
}

export default Completed