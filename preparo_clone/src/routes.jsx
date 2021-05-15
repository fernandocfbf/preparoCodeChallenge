import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Inicio from './pages/inicio'
import Localizacao from './pages/localizacao'
const Routes = () => (
  <Router>
      <Switch>
          <Route path="/perfil" component={Inicio}></Route>
          <Route path="/localizacao" component={Localizacao}></Route>
          <Redirect to='localizacao'></Redirect>
      </Switch>
  </Router>
)

export default Routes