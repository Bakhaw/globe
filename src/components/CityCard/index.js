import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  top: 20px;
  background: #f7f7f7;
  border-radius: 4px;
  padding: 20px;
  width: 200px;
  @media (max-width: 800px) {
    left: 20px;
    top: unset;
    width: unset;
    padding: 3px 15px;
  }
`;

const CityCard = ({ focus }) => (
  <Wrapper>
    <p>{focus.city}</p>
  </Wrapper>
);

export default CityCard;
