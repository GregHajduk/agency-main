import React from "react";
import styled from "styled-components";
import abstraction from "../images/abstraction.jpg";
import Description from "../components/Description";
import Container from "../components/Container";
import Title from "../components/Title";
import Button from "../components/Button";

const Wrapper = styled.div`
  background-color: var(--dark-color);
  height: 100%;
  width: 100%;
  position: relative;
`;
const Image = styled.img`
  height: 100%;
  width: 50%;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 77% 100%, 0% 100%);
`;
const TextContainer = styled.div`
  width: 70%;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  padding: 5rem 7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #000000a4;
`;
const About = () => {
  return (
    <Container>
      <Wrapper id="about">
        <Image src={abstraction} />
        <TextContainer>
          <Title title={"get those creative juices flowing"} color={"white"} />
          <Description
            desc={
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
            }
            color={"snow"}
          />
          <Button
            name={"our work"}
            color={"white"}
            backgroundColor={"var(--btn-color)"}
          />
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default About;
