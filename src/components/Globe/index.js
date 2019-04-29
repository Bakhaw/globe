import React, { useState } from 'react';
import ReactGlobe from 'react-globe';
import styled from 'styled-components';

import BottomMenu from '../BottomMenu';
import RightMenu from '../RightMenu';
import * as reactGlobeProps from './utils';

const Wrapper = styled.div`
  height: 100vh;
  max-width: 100vw;
  @media (max-width: 800px) {
    height: 35vh;
  }
`;

function Globe() {
  const [showCityCard, setShowCityCard] = useState(false);
  const { focus, goTo } = reactGlobeProps.useFocus();

  async function handleClick({ city }) {
    await goTo(city);
    await setShowCityCard(true);
  }

  async function onDefocus() {
    await setShowCityCard(false);
    await goTo('None');
  }

  return (
    <Wrapper>
      <ReactGlobe
        focus={focus !== undefined ? focus.coordinates : focus}
        onClickMarker={handleClick}
        onDefocus={onDefocus}
        {...reactGlobeProps}
      />
      {showCityCard ? (
        <BottomMenu card={focus} handleBackButtonClick={onDefocus} />
      ) : (
        <RightMenu handleClick={handleClick} />
      )}
    </Wrapper>
  );
}

export default Globe;
