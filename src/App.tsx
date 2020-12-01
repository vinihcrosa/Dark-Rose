import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import light from './styles/themes/light';
import GlobalStyles from './styles/global';

import MainRoutes from './routes';


function App() {
  return (
    <Router>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <MainRoutes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
