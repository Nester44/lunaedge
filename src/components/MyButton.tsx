import { Button } from '@mui/material';
import React from 'react';

type MyButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const MyButton = ({ children, onClick, endIcon, startIcon }: MyButtonProps) => {
  return <Button
    disableElevation
    onClick={onClick}
    variant='contained'
    size='small'
    endIcon={endIcon}
    startIcon={startIcon}
    sx={{
      background: '#134267',
      color: '#93A8C1'
    }}>
    {children}
  </Button>
}

export default MyButton