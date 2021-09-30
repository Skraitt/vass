import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/components/header.scss'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/images/logo-vass-blanco.png';


export default function Header() {

  return (
    <div className="header">

      <Navbar bg="black" variant="dark" sticky="top" expand="xl" collapseOnSelect>
        <div className="container-lg">
          <Navbar.Brand>
            <img src={logo}/> 
          </Navbar.Brand>
          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse >
            <Nav>
              <Nav.Link href="">Casos de éxito</Nav.Link>
              <NavDropdown title="Mercados" className="divider" >
                <NavDropdown.Item href="">APP</NavDropdown.Item>
                <NavDropdown.Item href="">BANCA</NavDropdown.Item>
                <NavDropdown.Item href="">EU&E</NavDropdown.Item>
                <NavDropdown.Item href="">INDUSTRIA</NavDropdown.Item>
                <NavDropdown.Item href="">SEGUROS</NavDropdown.Item>
                <NavDropdown.Item href="">TELCO & MEDIA</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Somos VASS">
                <NavDropdown.Item href="">Equipo</NavDropdown.Item>
                <NavDropdown.Item href="">RSC</NavDropdown.Item>
                <NavDropdown.Item href="">Países</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Como lo hacemos">
                <NavDropdown.Item href=""><h4>Impactos</h4>¿QUÉ LOGRADO?</NavDropdown.Item>
                <NavDropdown.Item href=""><h4>Método</h4>¿CÓMO LO LOGRAMOS?</NavDropdown.Item>
                <NavDropdown.Item href=""><h4>Tecnologías</h4>¿CON QUÉ LO LOGRAMOS?</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="">Insights</Nav.Link>
              <Nav.Link href="">Noticias</Nav.Link>
              <Nav.Link href="">VASS Research</Nav.Link>
              <Nav.Link href="">EN</Nav.Link>
              <Nav.Link href="">Q</Nav.Link>
              <Nav.Link href="">Talento</Nav.Link>
            </Nav>
          </Navbar.Collapse> 
        </div>        
      </Navbar>
    </div>
  )
}
