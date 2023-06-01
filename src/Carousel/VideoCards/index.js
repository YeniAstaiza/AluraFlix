import React from "react";
import { styled } from "styled-components";

const Cards = styled.a`
  width: 100%;
  height: 30%;
  
`

const ImgVideos = styled.img `
    width: 30%; 
    border: 4px solid #00C86F;
    border-radius: 4px;
`

const VideoCards = (props) => {

    const  { categoria, link, imagen} = props.datos;
    return (
            <Cards href={link} target="_blank">
                {categoria}
                <ImgVideos src={imagen} styled = {{borderColor : props.colorPrimario}}/>
            </Cards>

        )
}

export default VideoCards