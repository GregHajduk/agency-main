import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Title from "../components/Title";
import Container from "../components/Container";
import services from "../data/services";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: var(--dark-color);
`;
const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65%;
  width: 100%;
`;

const Services = () => {
  return (
    <Container>
      <Wrapper id="services">
        <Title title={"services"} color="var(--light-color)" />
        <CardsWrapper>
          {services.map((service) => {
            const { id, title, image, desc } = service;
            return <Card key={id} title={title} image={image} desc={desc} />;
          })}
        </CardsWrapper>
      </Wrapper>
    </Container>
  );
};

export default Services;
