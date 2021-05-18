import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Inicio from './pages/inicio'
import Localizacao from './pages/localizacao'
import Dados from './pages/dados'
import Login from './pages/login'

const Routes = () => (
  <Router>
      <Switch>
          <Route path="/perfil" component={Inicio}></Route>
          <Route path="/localizacao" component={Localizacao}></Route>
          <Route path="/dados" component={Dados}></Route>
          <Route path="/login" component={Login}></Route>
          <Redirect to='login'></Redirect>
      </Switch>
  </Router>
)

export default Routes