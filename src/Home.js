import React, { useState, useRef, useEffect } from 'react'
import { FaCode, FaCommentDots, FaDollarSign, FaUsers } from 'react-icons/fa'
import Galeria from './Galeria'

const Home = () => {
    return (
      <>
        <header>
        </header>
  
        <div className="icons-container">
            <main>
            <div className="galeria">
            <Galeria/>
            </div>
              <div className="row">
                  <div className="column">
                    <div className="icono"><FaCommentDots/></div>
                    <h3 className="text-white">Habla hispana</h3>
                  </div>
                  
                  <div className="column">
                    <div className="icono"><FaDollarSign/></div>
                    <h3 className="text-white">Consigue $</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <div className="icono"><FaCode/></div>
                    <h3 className="text-white">Scripts propios</h3>
                  </div>
                  <div className="column">
                    <div className="icono"><FaUsers/></div>
                    <h3 className="text-white">Crea tu personaje</h3>
                  </div>
              </div>
            </main>
        </div>
        <footer>
        </footer>
      </>
    
    )
}
export default Home
