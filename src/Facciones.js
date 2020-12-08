import React, { useState, useRef, useEffect } from 'react';
import lspd from './img/lspd.webp';
import lsmd from './img/lsmd.webp';
import lsc from './img/lsc.jpg';



const Facciones = () => {
    return (
      <>
      <div class="card-group">
        <div class="card">
          <img class="card-img-top" src={lspd} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title text-center">LSPD</h5>
            <p class="card-text">Combate día tras día contra la delincuencia que sufre la ciudad y vela por la seguridad de sus ciudadanos.</p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={lsmd} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title text-center">EMS Paramedic</h5>
            <p class="card-text">Harán lo posible para que todos los ciudadanos se encuentren sanos.</p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={lsc} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title text-center">Los Santos Custom</h5>
            <p class="card-text">¿Necesitas reparar tu vehículo o darle una nueva imágen? Ellos harán lo posible para que tus amigos alucinen con tu nuevo coche.</p>
          </div>
        </div>
      </div>
      </>

    )
}
export default Facciones
