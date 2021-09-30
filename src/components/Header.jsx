import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/components/header.scss'
import logo from '../assets/images/logo-vass-blanco.png';


export default function Header() {

  return (
    <nav className="navbar navbar-expand-xxl navbar-dark scrolling-navbar fixed-top">
      <div className="container-fluid d-flex">
        <div className="container-sm bar__brand align-self-start" >
          <a className="navbar-brand" href="#">
            <img src={logo} alt="vass-logo" />
          </a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 bar__options">
            <li className="nav-item">
              <a className="nav-link bar__item" aria-current="page" href="#">Casos de éxito</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle bar__item" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Mercados</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item bar__item" href="#">APP</a></li>
                <li><a className="dropdown-item bar__item" href="#">BANCA</a></li>
                <li><a className="dropdown-item bar__item" href="#">EU&E</a></li>
                <li><a className="dropdown-item bar__item" href="#">INDUSTRIA</a></li>
                <li><a className="dropdown-item bar__item" href="#">SEGUROS</a></li>
                <li><a className="dropdown-item bar__item" href="#">TELCO & MEDIA</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle bar__item" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Países</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item bar__item" href="#">Chile</a></li>
                <li><a className="dropdown-item bar__item" href="#">Colombia</a></li>
                <li><a className="dropdown-item bar__item" href="#">Mexico</a></li>
                <li><a className="dropdown-item bar__item" href="#">Peru</a></li>
                <li><a className="dropdown-item bar__item" href="#">Reino Unido</a></li>
                <li><a className="dropdown-item bar__item" href="#">Benelux</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle bar__item" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Somos VASS</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item bar__item" href="#">EQUIPO</a></li>
                <li><a className="dropdown-item bar__item" href="#">RSC</a></li>
                <li><a className="dropdown-item bar__item" href="#">Paises</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle bar__item" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Como lo hacemos</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item bar__item" href="#">¿QUÉ LOGRADO?</a></li>
                <li><a className="dropdown-item bar__item" href="#">¿CÓMO LO LOGRAMOS?</a></li>
                <li><a className="dropdown-item bar__item" href="#">¿CON QUÉ LO LOGRAMOS?</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link bar__item" href="#">Insights</a>
            </li>
            <li className="nav-item">
              <a className="nav-link bar__item" href="#">Noticias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link bar__item" href="#">VASS Research</a>
            </li>
            <li className="nav-item">
              <a className="nav-link bar__item" href="#">EN</a>
            </li>
            <li className="nav-item">
              <a className="nav-link bar__item" href="#"><img className="nav__icon" src="https://img.icons8.com/external-becris-lineal-becris/64/ffffff/external-loupe-mintab-for-ios-becris-lineal-becris.png"/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link bar__item" href="#">Talento</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
