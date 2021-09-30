import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/components/consider.scss'

export default function Consider() {
  return (
    <div className="container-fluid bg-black">
      <div className="container consider__margin">
        <form className="consider__form form p-5">
          <div className="consider__container form-row row row-cols-2 d-flex p-3">
            <div className="col-md d-flex flex-column">
              <input type="text" className="form-control-lg consider__input" placeholder="Nombre y apellido" />
              <input type="email" className="form-control-lg consider__input" placeholder="Email"/>
              <input type="text" className="form-control-lg consider__input" placeholder="Empresa / Organismo" />
              <input type="text" className="form-control-lg consider__input" placeholder="Pais" />
            </div>
            <div className="col  d-flex flex-column">
              <input type="number" className="form-control-lg consider__input" placeholder="Telefono"/>
              <div className="col">
                <label htmlFor="formText" className="mb-4 form-label d-block text-white px-3">Mensaje: </label>
                <textarea className="form-control consider__input--textarea bg-black" id="formText" rows="6"></textarea>
              </div>
              <a className="consider__summit btn btn-black rounded-circle mb-3 border border-white link-light align-self-end" href="">Enviar</a>
            </div>
          </div>          
        </form>
      </div>
    </div>
  )
}
