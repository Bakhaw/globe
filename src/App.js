import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Globe from './components/Globe';
import UpdateApp from './components/UpdateApp';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

export default function App() {
  return (
    <>
      <Globe />
      <UpdateApp />
      <GlobalStyle />
    </>
  );
}
