import { Button } from '@mui/material';
import React from 'react';

type MyButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
}

const MyButton = ({ children, onClick, endIcon, startIcon, disabled }: MyButtonProps) => {
  return <Button
    disabled={disabled}
    disableElevation
    onClick={onClick}
    size='small'
    endIcon={endIcon}
    startIcon={startIcon}
    sx={{
      background: '#134267',
      color: '#93A8C1',
      '&.Mui-disabled': {
        background: 'transparent',
        color: '#93A8C1',
      }
    }}>
    {children}
  </Button>
}

export default MyButton