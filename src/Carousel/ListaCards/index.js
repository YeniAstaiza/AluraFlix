import React from "react"
import { styled } from "styled-components"

const StyledLista = styled.div`
  max-width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
`

const BtnFront = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 41px;
    display: flex;
    align-items: center;
    text-align: center;
    color: white;
    border-radius: 3px;
    display: inline-block;
    padding: 8px;
`

const Descripcion = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 21px;
    color: white;
    background-size: auto;
`

const ListaCards = (props) => {
    const { titulo, colorPrimario, descripcion} = props.datos;
    return (
        <StyledLista>
           <BtnFront style={ {backgroundColor:colorPrimario} }>
                {titulo}
           </BtnFront>
            <Descripcion>
                {descripcion}
            </Descripcion>
            
        </StyledLista>
    )
}

export default ListaCards