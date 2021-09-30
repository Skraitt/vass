import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/components/footer.scss'
import logo from '../assets/images/logo-vass-blanco.png';
import icon1 from '../assets/images/aenor-01.png';
import icon2 from '../assets/images/aenor-02.png';
import icon3 from '../assets/images/aenor-03.png';
import icon4 from '../assets/images/aenor-04.png';

export default function Footer() {
  return (
    <div className="footer container-fluid bg-lightdark p-0">
      <section className="container-xxl py-5">
        <div className="footer__container row-cols-2 d-flex p-3 ">
          <section className="footer__container__logo p-3 col-sm-1 d-flex justify-content-between  flex-column">
            <h5 className="text-right font-weight-bold text-white footer__title">Complex made simple</h5>
            <img className="footer__container__logo--logo align-self-end d-none d-md-block " src={logo} alt="Vass" />
          </section>
          <section className="footer__container__cols container-fluid d-flex  m-0 col-md-11 row row-cols-auto">
            <div className="footer__container__links col-md-5 d-flex  flex-column footer__section pl-3">
              <h6 className="font-weight-bold d-flex text-white">Sitemap VASS</h6>
              <a className="footer__links" href="">Home</a>
              <a className="footer__links" href="">Casos éxito</a>
              <a className="footer__links" href="">Somos VASS</a>
              <a className="footer__links" href="">Impactos</a>
              <a className="footer__links" href="">Método</a>
              <a className="footer__links" href="">Tecnologías</a>
              <a className="footer__links" href="">Proyectos I+D+i</a>
              <a className="footer__links" href="">Insights</a>
              <a className="footer__links" href="">Noticias</a>
              <a className="footer__links" href="">VASS Research</a>
              <a className="footer__links" href="">Canal de denuncias</a>
              <a className="footer__links" href="">Contacto</a>
            </div>
            <div className="footer__container__links col-md-4 d-flex flex-column pl-5">
              <h6 className="font-weight-bold text-white">Sitemap VASS</h6>
              <a className="footer__links" href="">Talento</a>
              <a className="footer__links" href="">#LifeVASS</a>
              <a className="footer__links" href="">Beneficios</a>
              <a className="footer__links" href="">Planes para ti</a>
              <a className="footer__links" href="">Proyectos</a>
              <a className="footer__links" href="">Smartworking</a>
              <a className="footer__links" href="">Ofertas</a>
            </div>
            <div className="col-md-3 footer__container__links  d-flex flex-column justify-content-between align-items-end">
              <div>
                <h6 className="font-weight-bold text-white">Empresas</h6>
                <a className="footer__links" href="">VASS</a>
                <a className="footer__links" href="">Nateevo</a>
                <a className="footer__links" href="">Serbatic</a>
                <a className="footer__links" href="">vdSHOP</a>
              </div>
              <div className="d-none d-md-block ">
                <img className="companies__icon m-1" src={icon1} alt="" />
                <img className="companies__icon m-1" src={icon2} alt="" />
                <img className="companies__icon m-1" src={icon3} alt="" />
                <img className="companies__icon m-1" src={icon4} alt="" />
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="container-xxl border-top border-white">
        <div className="footer__final row-cols-3 d-flex py-5 px-3">
          <section className="footer__final--section col-3 d-flex justify-content-start">
            <small className="text-white small">Copyright © 2021 Todos los derechos reservados</small>
          </section>
          <ul className="footer__final--section col-7 d-flex footer__list">
            <div className="row d-flex flex-wrap footer__final__links">
              <li className="col-4"><a className="footer__links  separator separator__right justify-content-end px-2"  href="">Memoria ambiental</a></li>
              <li className="col-4"><a className="footer__links separator justify-content-center" href="">Política de cookies</a></li>
              <li className="col-4"><a className="footer__links separator separator__left justify-content-start px-2" href="">Politica de privacidad</a></li>
              <li className="col-12 px-5"><a className="footer__links separator justify-content-center" href="">Política de calidad y medio ambiente</a></li>
            </div>
          </ul>
          <section className="col-2 d-flex justify-content-end footer__final__socialNetworks">
            <a className="p-1" href="">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png"/>
            </a>
            <a className="p-1" href="">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin-2--v1.png"/>
            </a>
            <a className="p-1" href="">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"/>
            </a>
            <a className="p-1" href="">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/youtube-play.png"/>
            </a>
          </section>
        </div>
      </section>        
    </div>
  )
}
