import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Container from "../components/Container";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const Work = () => {
  return (
    <Container>
      <Wrapper id="work">
        <Title title="work" color="var(--light-color)" />
      </Wrapper>
    </Container>
  );
};

export default Work;
