import React from 'react';
import styled from 'styled-components';
import { markers } from '../Globe/utils';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  right: 20px;
  bottom: 20px;
  top: 20px;
  padding: 20px 20px 0 20px;
  width: 300px;
  background: transparent;
  border-radius: 4px;
  @media (max-width: 800px) {
    left: 20px;
    top: unset;
    width: unset;
    padding: 3px 15px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  overflow: hidden scroll;
`;

const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  position: relative;
  right: 0;
  margin: 6px 0;
  width: 100%;
  transform: scale(0.9);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  span {
    z-index: 1;
    position: absolute;
    bottom: 20%;
    left: 5%;
    font-size: 24px;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }
  img {
    filter: contrast(0.75);
    height: 150px;
    width: 250px;
    border-radius: 6px;
  }
  &:hover {
    transform: scale(1);
    img {
      filter: contrast(1);
    }
  }
`;

const RightMenu = ({ handleClick }) => {
  const items = [...markers, ...markers];
  return (
    <Wrapper>
      <List>
        {items.map((marker, index) => (
          <ListItem key={index} onClick={() => handleClick(marker)}>
            <span>{marker.city}</span>
            <img alt={`${marker.city} background`} src={marker.image} />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default RightMenu;
