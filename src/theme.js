import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      /*main: '#B03623', // Dark brown*/
      main: '#B0462F', // Match with logo pdf
    },
    secondary: {
      main: '#F9E2bc', // Very light yellow
    },
    background: {
      default: '#FFFFFF', // A very light grey for the page background
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'Omnes Regular',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default theme;