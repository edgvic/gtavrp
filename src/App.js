import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Particles from 'react-particles-js';
import Navbar from './Navbar'
import Home from './Home'
import Donaciones from './Donaciones'
import Facciones from './Facciones'
import Normativa from './Normativa'
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 500
      }
    }
  },
  interactivity: {
    onhover: {
      enable: true
    }
  }
}


class App extends Component {
  render() {
    return (
      <>
        <Particles className="particles"
          params={particlesOptions}
        />
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/donaciones" component={Donaciones} />
          <Route exact path="/facciones" component={Facciones} />
          <Route exact path="/normativa" component={Normativa} />
          <Route path="*" component={Home} />
        </Switch>
      </>
    );
  } 
}

export default App
