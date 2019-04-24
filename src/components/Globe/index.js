import React from 'react';
import ReactGlobe from 'react-globe';
import styled from 'styled-components';

import CityCard from '../CityCard';
import NavigateButtons from './NavigateButtons';
import {
  cameraOptions,
  lightOptions,
  markers,
  markerOptions,
  useFocus
} from './utils';

const Wrapper = styled.div`
  height: 100vh;
  max-width: 100vw;
`;

function Globe() {
  const { focus, focusOptions, goTo } = useFocus();

  return (
    <Wrapper>
      <NavigateButtons goTo={goTo} />
      <ReactGlobe
        cameraOptions={cameraOptions}
        focus={focus !== undefined ? focus.coordinates : focus}
        focusOptions={focusOptions}
        // lightOptions={lightOptions}
        markers={markers}
        markerOptions={markerOptions}
        onClickMarker={marker => goTo(marker.city)}
      />
      {focus && <CityCard focus={focus} />}
    </Wrapper>
  );
}

export default Globe;
