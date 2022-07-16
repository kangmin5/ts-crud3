import React, { FC } from 'react'

type Color = {
    border: string,
    width: string,
}
const ColorLine:FC<Color> = (props:Color) => {
  return ( 
    <hr
        style={props}
    />
)}
export default ColorLine