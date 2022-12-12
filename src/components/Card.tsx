import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { Stack } from '@mui/system';
import logoSrc from '../assets/ChadLogo.png'
import { Button, Link, Typography } from '@mui/material';

type Props = {
  children?: React.ReactNode;
  childrenOnTop?: React.ReactNode;
  title?: string;
  body?: string;
  buttonText?: string;
  logo?: boolean;
  altButtonText?: string;
  altButtonLabel?: string;
  centerText?: boolean;
  paddingY?: number;
  paddingX?: number;
  callback?: () => void;
}

const Logo = () => {
  return <Stack direction='row' mb={3} >
    <img src={logoSrc} />
    <Typography variant="h6">Chad</Typography>
  </Stack>
}


const Card = ({ children, childrenOnTop, body, title, buttonText, altButtonText, altButtonLabel, logo, centerText, paddingX, paddingY, callback }: Props) => {
  return (
    <Box
      sx={{
        maxWidth: '480px',
        background: 'white',
        paddingY: { xs: 2, sm: paddingY || 8 },
        paddingX: { xs: 4, sm: paddingX || 5 },
        marginX: 'auto',
        marginTop: { xs: 0, sm: 15 },
        marginBottom: 'auto',
        borderRadius: 2,
        boxShadow: { xs: 'none', sm: '0px 5px 20px 0px #6C758B33' },
        textAlign: centerText ? 'center' : 'left',
      }}
    >
      {childrenOnTop && childrenOnTop}
      {logo && <Logo />}
      <Stack mt={childrenOnTop ? 2 : 0} mb={children ? 4 : 2}> {/* Different margin bottom for text with and without children*/}
        <Typography mb={1} variant="h5" sx={{ fontWeight: '600' }}>
          {title}
        </Typography>
        <Typography variant='body2' >
          {body}
        </Typography>
      </Stack>

      {children}

      <Button
        size='large'
        sx={{
          borderRadius: 2,
          marginTop: 4,
        }}
        fullWidth
        variant='contained'
        color='primary'
        disableElevation
        type={callback ? 'button' : 'submit'}
        onClick={callback}
      >
        {buttonText}
      </Button>
      <Box display='flex' mt='16px' justifyContent='center' >
        <Typography variant='caption' >
          {altButtonLabel}
        </Typography>
        &nbsp;
        <Typography variant='caption' sx={{ color: '#4BB5F3' }} >
          {altButtonText}
        </Typography>
      </Box>

    </Box >
  )
}

export default Card