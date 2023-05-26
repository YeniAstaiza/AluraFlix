import React, { Children } from "react";
import { styled } from "styled-components";

const Btn = styled.a`
  text-align: center;
  padding: 12px 20px;
  font-weight: 600;
  border: 1px solid white;
`
const variants = {
  "ppal": {
    color: "white",
    backgrond: "black"
  },
  "nuevo": {
    color: "white",
    background:"#2A7AE4",
  },

  "guardar": {
    color: "white",
    background:"#2A7AE4",
  },

  "limpiar": {
    color: "black",
    background: "#9E9E9E",
    
  }
}
const Btnb = styled.button`
  text-align: center;
  padding: 12px 20px;
  font-weight: 600;
  border: 1px solid white;
`
const Button = ({label, variant, tag = "a"}) => {
  if(tag === "a"){
    return (
      <Btn style={variants[variant]}>{label}</Btn>
    )
  }else{
    return ("p")
  }
}

export default Button