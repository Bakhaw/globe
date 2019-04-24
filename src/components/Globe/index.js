import React from 'react';
import ReactGlobe from 'react-globe';
import styled from 'styled-components';

import { lightOptions, markers, markerOptions, useFocus } from './utils';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Button = styled.button`
  position: absolute;
  left: 10px;
  top: 10px;
`;

function Globe() {
  const { focus, goTo } = useFocus();

  return (
    <Wrapper>
      <Button onClick={() => goTo(markers[0].coordinates)}>Prague</Button>
      <ReactGlobe
        focus={focus}
        lightOptions={lightOptions}
        markers={markers}
        markerOptions={markerOptions}
      />
    </Wrapper>
  );
}

export default Globe;
