import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Globe from './components/Globe';
import UpdateApp from './components/UpdateApp';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Raleway', sans-serif;
  }
  body {
    @media (max-width: 800px) {
      overflow: hidden;
      height: 100vh;
      background: #000;
    }
  }
  body,
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
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
