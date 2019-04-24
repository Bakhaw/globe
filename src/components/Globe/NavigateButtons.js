import React from 'react';
import styled from 'styled-components';

import { useFocus } from './utils';

const Wrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 4px 10px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 20px;
  color: #fff;
`;

function NavigateButtons({ goTo }) {
  const { focusButtonsDataset } = useFocus();
  return (
    <Wrapper>
      {focusButtonsDataset.map((data, index) => (
        <Button key={index} onClick={() => goTo(data)}>
          {data}
        </Button>
      ))}
    </Wrapper>
  );
}

export default NavigateButtons;
