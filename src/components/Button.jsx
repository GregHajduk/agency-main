import React from "react";
import styled from "styled-components";
const Btn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 3rem;
  border: var(--btn-color) 2px solid;
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
const Button = ({ name, color, backgroundColor }) => {
  return (
    <Btn
      style={{
        color: `${color}`,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {name}
    </Btn>
  );
};

export default Button;
