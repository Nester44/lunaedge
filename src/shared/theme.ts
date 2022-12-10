import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    h5: {
      color: '#134267',
      fontWeight: 'bold',
    },
    h6: {
      fontSize: '24px',
      color: '#20496C',
      fontWeight: 'bold',
    },
    body1: {
      color: '#fff'
    },
    body2: {
      color: '#4F637D',
    },
    caption: {
      color: '#4F637D',
    },
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#32ABF2',
      contrastText: '#fff',
    }
  }
})

export default theme