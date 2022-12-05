import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import TemplateDefault from './templates/Default'
import Home from "./pages/Home"
import Customers from "./pages/Customers"
import TemplatePage from './templates/Page'
import Contact from "./partials/Contact"
import ViaCep from "./pages/ViaCep"
const App = () => {
  return (
    <>
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path='/customers'>
            <TemplatePage title='Clientes' Component={Customers} />
          </Route>
          <Route path='/viacep'>
            <TemplatePage title='ViaCep' Component={ViaCep} />
          </Route>
          <Route path='/'>
            <TemplatePage title='' Component={Home} />
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
    <Contact />
    </>
  )
}

export default App;
