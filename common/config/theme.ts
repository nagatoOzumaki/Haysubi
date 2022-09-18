import { createTheme } from '@mui/material';
import colors from './colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary.main,
    },
    secondary: {
      main: colors.secondary.main,
    },      
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },

});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
    main: colors.secondary.main,
  },
  secondary: {
    main: colors.primary.main,
  }, 
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },

  
});
