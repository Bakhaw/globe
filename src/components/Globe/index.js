import React from 'react';
import ReactGlobe from 'react-globe';
import styled from 'styled-components';

import CityCard from '../CityCard';
import NavigateButtons from './NavigateButtons';
import * as reactGlobeProps from './utils';

const Wrapper = styled.div`
  height: 100vh;
  max-width: 100vw;
`;

function Globe() {
  const { focus, goTo } = reactGlobeProps.useFocus();

  function onClickMarker(marker) {
    goTo(marker.city);
  }

  function onDefocus() {
    goTo('None');
  }

  return (
    <Wrapper>
      <NavigateButtons goTo={goTo} />
      <ReactGlobe
        focus={focus !== undefined ? focus.coordinates : focus}
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
        {...reactGlobeProps}
      />
      {focus && <CityCard focus={focus} />}
    </Wrapper>
  );
}

export default Globe;
