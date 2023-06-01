import React  from "react";
import {styled} from "styled-components";
import logo from "../../img/logo.png";

const StyledFooter = styled.nav`
  width: 100%;
  height: 70px;
  background: black;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 10px 35px 10px;
`
const LogoFooter = styled.img`
    width: 160px;
`
const Footer = () => {
    return (
        <StyledFooter>
            <LogoFooter src={logo} alt="Logo AluraFlix" />
        </StyledFooter>
    )
   
}

export default Footer