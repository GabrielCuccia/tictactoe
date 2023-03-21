
import React, { Component } from 'react'
import "../style-shets/puntuacion.css"

export function Puntuacion(props) {
  
    return (
      <div style={{backgroundColor: props.color }} className='contenedor'>
          <p className='who'> {props.who} </p>
          <p className='wins'>{props.wins}</p>
      </div>
    )
  
}

export default Puntuacion