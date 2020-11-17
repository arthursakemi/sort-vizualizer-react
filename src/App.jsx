import React from 'react';
import GlobalStyle from './styles/global.styles';

import { grommet, Grommet } from 'grommet';

import HomePage from './pages/home/home.page';
import { deepMerge } from 'grommet/utils';

const theme = {
  global: {
    colors: {
      background: {
        light: '#F5F5F5',
        dark: '#282a36',
      },
    },
  },
};

const customTheme = deepMerge(grommet, theme);

function App() {
  return (
    <div className='App'>
      <Grommet theme={customTheme} themeMode='dark' full>
        <GlobalStyle />
        <HomePage />
      </Grommet>
    </div>
  );
}

export default App;
