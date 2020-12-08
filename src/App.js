import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Donaciones from './Donaciones'
import Facciones from './Facciones'
import Normativa from './Normativa'

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/donaciones" component={Donaciones} />
        <Route exact path="/facciones" component={Facciones} />
        <Route exact path="/normativa" component={Normativa} />
        <Route path="*" component={Home} />
      </Switch>
    </>
  )
}

export default App
