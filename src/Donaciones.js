import React from 'react';
import './donaciones.css';
import coche from './shop/coche.png';
import store from './shop/store.png';
import mafia from './shop/mafia.png';
import gold from './shop/gold.png';
import silver from './shop/silver.png';
import bronze from './shop/bronze.png';
import diamond from './shop/diamond.png';
import platinum from './shop/platinum.png';


const Donaciones = () => {
    return (
<div class="shop-items">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3 col-sm-6">
           
            <div class="item">
             
              <img class="img-responsive" src={bronze} alt="" />
            
              <div class="item-dtls">
               
                <h4>Pack donador bronce</h4>
              
                <span class="price green">10€</span>
              </div>
             
              <div class="ecom bg-green">
                <p>- 25k IC <br/>
                  - Un coche del concesionario</p>
                <a class="btn" href="#">Donar</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
      
            <div class="item">
           
              <img class="img-responsive" src={silver} alt="" />
            
              <div class="item-dtls">
           
              <h4>pack donador plata</h4>
                <span class="price green">15€</span>
              </div>
              <div class="ecom bg-green">
                <p>- 50k IC <br/>- Un coche de donador <br/>- 1 deagle</p>
              <a class="btn" href="#">Donar</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="item">
              <img class="img-responsive" src={gold} alt="" />
              <div class="item-dtls">
              <h4>pack donador oro</h4>
                <span class="price green">20€</span>
              </div>
              <div class="ecom bg-green">
                <p>- 75k IC<br/> - Un coche de donador <br/>- Un tuneo para coche gratis<br/> - 1 smg</p>
                <a class="btn" href="#">Donar</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="item">
              <img class="img-responsive" src={platinum} alt="" />
              <div class="item-dtls">
              <h4>pack donador platino</h4>
                <span class="price green">25€</span>
              </div>
              <div class="ecom bg-green">
                <p> - 2 coches de donador + 1 del concesionario <br/>- 125k IC <br/>- 1 deagle + 1 subfusil<br/> - Canal exclusivo en discord</p>
                <a class="btn" href="#">Donar</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="item">
              <img class="img-responsive" src={diamond} alt="" />
              <div class="item-dtls">
                <h4><a href="#">pack donador gema</a></h4>
                <span class="price green">40€</span>
              </div>
              <div class="ecom bg-green">
                <p>- 200k IC <br/>- Un coche personalizado de gta 5 mods <br/>- Tuneo gratis para ese mismo coche <br/>- 1 carabina  <br/>- Rango donador gema discord <br/>- Canal exclusivo en discord  <br/>- Preferencia en cola</p>
                <a class="btn" href="#">Donar</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="item">
              <img class="img-responsive" src={coche} alt="" />
              <div class="item-dtls">
                <p>-Coche Exclusivo <br/>-Tuneo gratis</p>
                <h4><a href="#">pack coche exclusivo gtav mods</a></h4>
                <span class="price green">30€</span>
              </div>
              <div class="ecom bg-green">
                <a class="btn" href="#">Donar</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="item">
              <img class="img-responsive" src={store} alt="" />
              <div class="item-dtls">
                <h4><a href="#">Locales</a></h4>
                <span class="price green">25€</span>
              </div>
              <div class="ecom bg-green">
                <p> Locales disponibles:<br/>  - Vanilla <br/>- Ammu-nation de ciudad (al lado de concesionario) <br/>- Ammu-nation del norte. <br/>- Bahamas <br/>- Tekila-la <br/>- Yellow J</p>
                <a class="btn" href="#">Donar</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="item">
              <img class="img-responsive" src={mafia} alt="" />
              <div class="item-dtls">
                <h4><a href="#">pack mafia</a></h4>
                <span class="price green">30€</span>
              </div>
              <div class="ecom bg-green">
                <a class="btn" href="#">Donar</a>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>                    )
}
export default Donaciones
