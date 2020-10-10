import React from 'react';
import GlobalStyle from './styles/global.styles';

import HomePage from './pages/home/home.page';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <HomePage />
    </div>
  );
}

export default App;
