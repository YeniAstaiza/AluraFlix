import React from "react"
import { styled } from "styled-components"

const StyledLista = styled.div`
    width:100%;
`

const BtnFront = styled.h2`
    border-radius: 4px;
    color: white;
    font-weight: 400;
    font-size: 3rem;
    line-height: 1rem;
    align-items: center;
    text-align: center;
    padding: 5px 10px;
`

const Descripcion = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
`

const ListaCards = (props) => {
    const { titulo, colorPrimario, descripcion} = props.datos;
    return (
        <StyledLista>
           <BtnFront style={ {background:colorPrimario} }>
                {titulo}
           </BtnFront>
            <Descripcion p={descripcion}/>
        </StyledLista>
    )
}

export default ListaCards