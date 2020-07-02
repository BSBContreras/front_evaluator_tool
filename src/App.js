import React from 'react';
import Header from './components/layouts/Header';
import Main from './components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: lightGreen,
  },
  typography: {
    fontFamily: [
      'Roboto',
    ]
  },
});

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      <Header />

      <Main />

    </MuiThemeProvider>
  );
}
