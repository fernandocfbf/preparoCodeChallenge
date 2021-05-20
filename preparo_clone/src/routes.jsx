import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Inicio from './pages/inicio'
import Localizacao from './pages/localizacao'
import Dados from './pages/dados'
import Login from './pages/login'
import PrivateRoute from './services/privateRoute'

const Routes = () => (
  <Router>
      <Switch>
          <PrivateRoute path="/perfil" component={Inicio}></PrivateRoute>
          <PrivateRoute path="/localizacao" component={Localizacao}></PrivateRoute>
          <PrivateRoute path="/dados" component={Dados}></PrivateRoute>
          <Route path="/login" component={Login}></Route>
          <Redirect to='login'></Redirect>
      </Switch>
  </Router>
)

export default Routes