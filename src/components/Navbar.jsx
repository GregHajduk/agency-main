import React from "react";
import navLinks from "../data/navLinks";
import styled from "styled-components";
import Button from "./Button";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";


const Container = styled.div`
  height: 5rem;
  width: 100%;
  background-color: #0000008b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  z-index: 100;
`;
const MenuLeft = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;
const LogoContainer = styled.div`
  flex: 1;
`;
const Logo = styled.a`
  font-size: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 900;
  padding: 0.25rem 0.5rem;
  color: white;
  border: 3px solid white;
  cursor: pointer;
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    height: 100vh;
    background-color: #0000008b;
    position: absolute;
    justify-content: center;
    text-align: center;
    width: 15rem;
    top: 0;
    right: ${({ active }) => (active ? "0" : "-15rem")};
    z-index: 100;
  } ;
`;
const MenuItem = styled.a`
  text-decoration: none;
  list-style: none;
  color: var(--light-color);
  font-weight: 200;
  text-transform: capitalize;
  cursor: pointer;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    background-color: var(--btn-color);
    width: 0%;
    height: 2px;
    left: 0;
    bottom: -3px;
    transition: 200ms;
  }
  &:hover:after {
    width: 100%;
  }
  @media only screen and (max-width: 700px) {
    margin: 1rem 0;
  }
`;
const Hamburger = styled.div`
  cursor: pointer;
  z-index: 100;
  color: var(--light-color);
  @media only screen and (min-width: 700px) {
    display: none;
  }
`;

const Navbar = ({ active, setActive }) => {
  return (
    <Container>
      <MenuLeft>
        <LogoContainer>
          <Logo href="#home">view.</Logo>
        </LogoContainer>
        <Menu onClick={() => setActive(false)} active={active}>
          {navLinks.map((link) => (
            <MenuItem key={link.id} href={link.url}>
              {link.name}
            </MenuItem>
          ))}
        </Menu>
      </MenuLeft>
      <Button
        name={"join us"}
        color={"var(--btn-color)"}
        backgroundColor={"transparent"}
        />
      <Hamburger onClick={() => setActive(!active)}>
        {active ? <CloseIcon /> : <MenuIcon />}
      </Hamburger>
    </Container>
  );
};

export default Navbar;
