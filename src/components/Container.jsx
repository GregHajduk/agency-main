import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: var(--dark-color);
  /* scroll-snap-align: start;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  } */
`;
const Container = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Container;
