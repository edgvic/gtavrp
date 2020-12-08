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
                <a class="btn" href="#">Donar</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="item">
              <img class="img-responsive" src={coche} alt="" />
              <div class="item-dtls">
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
