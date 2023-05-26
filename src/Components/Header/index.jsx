import React from "react";
import { styled } from "styled-components";
import logo from "../../img/logo.png";
import Button from "../Button";


const StyledHeader = styled.nav`
  width: 100%;
  height: 70px;
  background: black;
  display:flex;
  justify-content: space-between ;
  align-items: center;
  padding: 10px 35px 10px;
`

const Logo = styled.img`
width:140px;
`


const Header = ( ) => {
    return (
        <StyledHeader>
            <Logo src={logo} alt="Logo AluraFlix" />
            <Button label="Nuevo video" variant="ppal" />
        </StyledHeader>
    )
}

export default Header