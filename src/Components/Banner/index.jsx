import React from "react";
import { styled } from "styled-components";
import ImPrincipal from "../../img/principal.png"
import ImPlayer from "../../img/player.png";

const StyledBanner = styled.nav`
    width: 100%;
`
const Principal = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: url(${ImPrincipal});
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const ContenidoBanner = styled.div`
    display: flex;
    flex-direction: center;
    padding: 20px 30px;
    align-items: center;
    margin: 12rem 0 0;
`
const BtnFront = styled.a`
    background: #6BD1FF;
    border-radius: 4px;
    color: white;
    font-weight: 400;
    font-size: 3rem;
    line-height: 1rem;
    align-items: center;
    text-align: center;
    padding: 5px 10px;
`
const Subtitulo = styled.h2`
    color: white;
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 2rem;
    padding: 3rem 0;
`

const Parrafo = styled.p`
    color: white;
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 1.6rem; 
`
const ContenidoImg = styled.div`
    width: 100%;
`
const Player = styled.img`
        width: 95%;
        margin: 10rem 0 0;
`
 

const Banner = () => {
    return (
       <StyledBanner>
            <Principal  src={ImPrincipal} alt="Logo AluraFlix">
                <ContenidoBanner>
                    <div >
                        <BtnFront>
                            Front End
                        </BtnFront>
                        <Subtitulo>Challenge React</Subtitulo>
                        <Parrafo> Este challenge es una forma de aprendizaje. 
                            Es un mecanismo donde podrás comprometerte en 
                            la resolución de un problema para poder aplicar
                            todos los conocimientos adquiridos en la formación React</Parrafo>
                    </div>
                </ContenidoBanner>
                <ContenidoImg>
                    <div>
                        <Player  src={ImPlayer} alt="ser desarrollador"/>
                    </div>
                    </ContenidoImg>
                
            </Principal>
        </StyledBanner>
    )
}


export default Banner