import * as React from 'react';
import './App.scss';
import { Global } from '@emotion/core';
import { GlobalStyles } from './components/blox/Global';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <h1>Coming soon...</h1>
    </ThemeProvider>
  );
}

export default App;
