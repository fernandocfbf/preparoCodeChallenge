import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Inicio from './pages/inicio'
import Localizacao from './pages/localizacao'
import Dados from './pages/dados'

const Routes = () => (
  <Router>
      <Switch>
          <Route path="/perfil" component={Inicio}></Route>
          <Route path="/localizacao" component={Localizacao}></Route>
          <Route path="/dados" component={Dados}></Route>
          <Redirect to='dados'></Redirect>
      </Switch>
  </Router>
)

export default Routes