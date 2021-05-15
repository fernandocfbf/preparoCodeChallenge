import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Inicio from './pages/inicio'

const Routes = () => (
  <Router>
      <Switch>
          <Route path="/perfil" component={Inicio}></Route>
          <Redirect to='perfil'></Redirect>
      </Switch>
  </Router>
)

export default Routes