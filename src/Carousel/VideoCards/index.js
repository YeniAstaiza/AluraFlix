import React from "react";
import { styled } from "styled-components";

const VideoC = styled.div`
    margin: 10px;
    `
;
const Cards = styled.a`
  width: 100%;
  height: 30%;
`

const ImgVideos = styled.img `
    max-width: 100%;
    border: 4px solid;
    border-radius: 4px;
`

const VideoCards = (props) => {

    const  { link, imagen, colorPrimario} = props.datos;
    return (
            <VideoC>
                    <Cards href={link} target="_blank">
                        <ImgVideos src={imagen} style={{borderColor:colorPrimario}}/>
                    </Cards>
            </VideoC>
        )
}

export default VideoCards