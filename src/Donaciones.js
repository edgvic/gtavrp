import React from 'react';
import './donaciones.css';
import mafia from './shop/mafia.png';
import gold from './shop/gold.png';
import silver from './shop/silver.png';
import bronze from './shop/bronze.png';
import diamond from './shop/diamond.png';
import platinum from './shop/platinum.png';
import galaxia from './shop/galaxia.png';
import universo from './shop/universo.png';
import exclusivo from './shop/exclusivo.png';
import gta from './shop/gta.png';


const Donaciones = () => {
    return (
<div class="shop-items">
      <div className="text-center text-dark">
        <h3>¡ATENCIÓN!</h3>
        <p className="text-dark"><b>Como hacer la donación:</b><br/>
          - Poner tu usuario de discord: Usuario#1234<br/>
          - Poner que pack quieres<br/>
          - Poner tu nombre de steam: usuario1234<br/>
          - Abrir un ticket en el discord para comentarnos y solicitar tus beneficios
        </p>

      </div>
      <div class="container-fluid">
        <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="item">
              <img class="img-responsive" src={platinum} alt="" />
              <div class="item-dtls">
              <h4>pack donador cinc</h4>
                <span class="price green">25€</span>
              </div>
              <div class="ecom bg-green">
                <p> - 50K <br/>
                    - Obtienes un vehículo de concesionario (Max.350K)</p>
                <a class="btn" href="https://www.paypal.com/pools/c/8sU0k91DhY">Donar</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
           
            <div class="item">
             
              <img class="img-responsive" src={bronze} alt="" />
            
              <div class="item-dtls">
               
                <h4>Pack donador bronce</h4>
              
                <span class="price green">10€</span>
              </div>
             
              <div class="ecom bg-green">
                <p>- 150K <br/>
                  - Una pistola normal (30K)<br/>
                  - Obtienes un vehículo de concesionario ( Max.500K)</p>
                <a class="btn" href="https://www.paypal.com/pools/c/8sU0k91DhY">Donar</a>
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
                <p>- 200K <br/>
                    - Un vehículo de donador<br/>
                    - Una Pistola Pesada</p>
              <a class="btn" href="https://www.paypal.com/pools/c/8sU0k91DhY">Donar</a>
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
                <p>- 200K<br/>
                    - 1 vehículo de donador<br/>
                    - 1 vehículo de concesionario (Max.500K)</p>
                <a class="btn" href="https://www.paypal.com/pools/c/8sU0k91DhY">Donar</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="item">
              <img class="img-responsive" src={diamond} alt="" />
              <div class="item-dtls">
                <h4>pack donador platino</h4>
                <span class="price green">30€</span>
              </div>
              <div class="ecom bg-green">
                <p>- 250K<br/>
                  - 2 vehículos de donador<br/>
                  - 2  pistola pesada</p>
                <a class="btn" href="https://www.paypal.com/pools/c/8sU0k91DhY">Donar</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="item">
              <img class="img-responsive" src={gta} alt="" />
              <div class="item-dtls">
                <h4>pack GTA</h4>
                <span class="price green">40€</span>
              </div>
              <div class="ecom bg-green">
                <p>- 250K<br/>
                  - 1 coche exclusivo de GTAV MODS<br/>
                  - 1 SMG</p>
                <a class="btn" href="https://www.paypal.com/pools/c/8sU0k91DhY">Donar</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="item">
              <img class="img-responsive" src={exclusivo} alt="" />
              <div class="item-dtls">
                <h4>pack exclusivo</h4>
                <span class="price green">70€</span>
              </div>
              <div class="ecom bg-green">
                <p> - 350K<br/>
                  - 1 coche de concesionario ( Max.500K)<br/>
                  - 2 coche exclusivo de GTA V MODS <br/>
                  - 2 SMG y una Pistola Pesada</p>
                <a class="btn" href="https://www.paypal.com/pools/c/8sU0k91DhY">Donar</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="item">
              <img class="img-responsive" src={mafia} alt="" />
              <div class="item-dtls">
                <h4>pack mafia</h4>
                <span class="price green">40€</span>
              </div>
              <div class="ecom bg-green">
                <a class="btn" href="https://www.paypal.com/pools/c/8sU0k91DhY">Donar</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="item">
              <img class="img-responsive" src={galaxia} alt="" />
              <div class="item-dtls">
              <h4>pack donador galaxia</h4>
                <span class="price green">100€</span>
              </div>
              <div class="ecom bg-green">
                <p>- 500K<br/>
                  - 2 coches de concesionario (Max.500K)<br/>
                  - 3 coches de GTA V MODS<br/>
                  - 3 SMG Y 3 AKA<br/>
                  - 1 Sniper Pesado<br/>
                  - Preferencia en cola.<br/>
                  - Canal exclusivo en Discord</p>
                <a class="btn" href="https://www.paypal.com/pools/c/8sU0k91DhY">Donar</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
           
            <div class="item">
             
              <img class="img-responsive" src={universo} alt="" />
            
              <div class="item-dtls">
               
                <h4>Pack donador universo</h4>
              
                <span class="price green">150€</span>
              </div>
             
              <div class="ecom bg-green">
                <p>- 1M<br/>
                  - 5 coches de GTA V MODS<br/>
                  - 5 SMG Y 5 AKA<br/>
                  - 2 Sniper Pesado<br/>
                  - Preferencia en cola.<br/>
                  - Canal exclusivo en Discord</p>
                <a class="btn" href="https://www.paypal.com/pools/c/8sU0k91DhY">Donar</a>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>                    )
}
export default Donaciones
