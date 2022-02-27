import React from "react";
import styled from "styled-components";

const Desc = styled.p`
margin-bottom: 2rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 1.7;
  font-weight: 200;
`;
const Description = ({ desc, color }) => {
  return <Desc style={{ color: `${color}` }}>{desc}</Desc>;
};

export default Description;
