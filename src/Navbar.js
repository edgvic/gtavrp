import React, { useState } from 'react'
import { FaBars, FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import logo from './logo.png'

const Navbar = () => {
  const[showLinks, setShowLinks] = useState(false);

  return <nav>
    <div className="nav-center">
      <div className="nav-header">
      <Link to="/"><img src={logo} alt="logo"/></Link>
        <button className="nav-toggle" onClick={()=> {
          setShowLinks(!showLinks)}}>
          <FaBars />
        </button>
      </div>


            <div className={`${showLinks?'links-container show-container': 'links-container'}`}>
                <ul className="links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/donaciones">Donaciones</Link>
                  </li>
                  <li>
                    <Link to="/facciones">Facciones</Link>
                  </li>
                  <li>
                   <Link to="/normativa">Normativa</Link>
                  </li>
                  <li>
                    <a href="https://discord.gg/WxzCZvwZDd" target="_blank">discord</a>
                  </li>
                  <li>
                    <a href="fivem://connect/8lavxv">Conectarse</a>
                  </li>
                </ul>                
            </div>


      <ul className="social-icons">
        <li>
          <a href="https://discord.gg/WxzCZvwZDd">
            <FaDiscord />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/envidiaos">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://https://www.youtube.com/channel/UCigsVElqcy5f33kcWESNhAQ/about">
            <FaYoutube />
          </a>
        </li>
      </ul>
      </div>
  </nav>
}

export default Navbar
