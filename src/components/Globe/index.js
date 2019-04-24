import React from 'react';
import ReactGlobe from 'react-globe';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

function Globe() {
  return (
    <Wrapper>
      <ReactGlobe />
    </Wrapper>
  );
}

export default Globe;
