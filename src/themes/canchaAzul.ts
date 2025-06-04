import { createTheme } from '@mui/material'

export const canchaAzul = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
  },
  spacing: 8,
})
