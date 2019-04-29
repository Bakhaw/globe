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
    position: unset;
    margin: auto;
    padding: 10px 0;
    height: calc(100vh - 35vh); /* Globe height is 35vh */
    width: 100vw;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  overflow: hidden scroll;
  @media (max-width: 800px) {
    display: unset;
  }
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
    left: 15%;
    font-size: 24px;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }
  img {
    filter: contrast(0.75);
    height: 120px;
    width: 220px;
    border-radius: 6px;
  }
  &:hover {
    transform: scale(1);
    img {
      filter: contrast(1);
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin: 12px 0;
    img {
      height: 160px;
      width: 280px;
    }
    span {
      bottom: calc(50% - 24px); /* 24px is top and bottom margin (12 + 12) */
      left: unset;
    }
  }
`;

function RightMenu({ handleClick }) {
  const items = [
    ...markers,
    ...markers,
    ...markers,
    ...markers,
    ...markers,
    ...markers,
    ...markers,
    ...markers
  ];
  return (
    <Wrapper>
      <List>
        {items.map((marker, index) => (
          <ListItem key={index} onClick={() => handleClick(marker)}>
            <img alt={`${marker.city} background`} src={marker.image} />
            <span>{marker.city}</span>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}

export default RightMenu;
