import React, { useState } from "react";
import styled from "styled-components";
import intro from "../images/intro.jpg";
import playbutton from "../images/playbutton.svg";
import introvideo from "../images/bgvideo.mp4";
import Button from "../components/Button";
import Title from "../components/Title";
import Description from "../components/Description";

const Container = styled.div`
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: var(--dark-color);
  display: flex;
  position: relative;
  &:after {
    display: ${(props) => !props.play && "none"};
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
  }
`;
const Wrapper = styled.div`
  width: 70%;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  background-color: var(--dark-color);
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const PlayButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 3rem;
  border: var(--btn-color) 2px solid;
  background-color: transparent;
  color: var(--btn-color);
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: 300ms ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;
const Play = styled.img`
  height: 2rem;
  width: 2rem;
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => !props.play && "none"};
  height: 600px;
  z-index: 10;
`;
const Right = styled.div`
  flex: 1;
  overflow: hidden;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  clip-path: polygon(23% 0, 100% 0, 100% 100%, 0 100%);
  object-fit: cover;
`;
const Intro = () => {
  const [play, setPlay] = useState(false);
  return (
    <Container play={play} id="home">
      <Video play={play} autoPlay loop controls src={introvideo} />
      <Left>
        <Wrapper>
          <Title title={"we made marketing easy."} color="var(--light-color)" />
          <Description
            desc={
              "A creative agency that spends its days crafting artistic and engaging work for brands and fellow businesses."
            }
            color="var(--light-color)"
          />
          <ButtonsContainer>
            <Button
              name={"let's talk"}
              color={"var(--light-color)"}
              backgroundColor={"var(--btn-color)"}
            />
            <PlayButton onClick={() => setPlay(true)}>
              see it yourself
              <Play src={playbutton} />
            </PlayButton>
          </ButtonsContainer>
        </Wrapper>
      </Left>
      <Right>
        <Image src={intro} />
      </Right>
    </Container>
  );
};

export default Intro;
