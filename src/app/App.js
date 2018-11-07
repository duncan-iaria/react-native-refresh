import React, { Component } from 'react';
import { RootStack } from './navigation';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <RootStack />
      </ThemeProvider>
    );
  }
}

export default App;
