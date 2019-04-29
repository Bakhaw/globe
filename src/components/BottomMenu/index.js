import React from 'react';
import styled from 'styled-components';

import LeftArrow from '../../assets/left-arrow.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 50px;
  right: 50px;
  bottom: 0;
  height: 55vh;
  h1 {
    color: #fff;
    font-size: 48px;
    margin: 0;
  }
  @media (max-width: 800px) {
    left: 20px;
    right: 20px;
  }
`;

const BackButton = styled.img`
  cursor: pointer;
  width: 40px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 35px 35px 0 35px;
  height: 35vh;
  border-radius: 6px 6px 0 0;
  background: #fff;
  @media (max-width: 800px) {
    padding: 20px 20px 0 20px;
    p {
      margin: 0;
    }
  }
`;

const CardImg = styled.img`
  height: 100%;
  width: 250px;
  @media (max-width: 800px) {
    height: 150px;
    width: 150px;
  }
`;

function BottomMenu({ card, handleBackButtonClick }) {
  console.log('HEREEE', card);
  return (
    <Wrapper>
      <div>
        <BackButton onClick={handleBackButtonClick} src={LeftArrow} />
        <h1>{card.city}</h1>
      </div>
      <Description>
        <p>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum
        </p>
        <CardImg alt={`${card.city} poster`} src={card.image} />
      </Description>
    </Wrapper>
  );
}

export default BottomMenu;
