import React from 'react'
import '../styles/Testimonio.css'

export default function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img src={require(`../assets/images/testimonio-${props.imagen}.png`)} alt='' className='imagen-testimonio' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'> <span className='text-bold'>{props.nombre}</span> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <span className='text-bold'>{props.empresa}</span></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  )
};
