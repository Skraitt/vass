import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/components/hero.scss'
import background from '../assets/images/fondo.jpg'

export default function Hero() {
  return (
    <div className="hero jumbotron jumbotron-fluid">
      <img className="hero__img img-fluid" src={background} alt="background" />
      <div className="hero__text display-2">CONTACTO</div>
    </div>
  )
}
