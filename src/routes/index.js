import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Mac from '../pages/Mac'
import Surface from '../pages/Surface'
import Swift from '../pages/Swift'
import Xps from '../pages/Xps'
import Zen from '../pages/Zen'
import Purchase from '../pages/Purchase'

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/mac" component={Mac} />
    <Route exact path="/surface" component={Surface} />
    <Route exact path="/swift" component={Swift} />
    <Route exact path="/xps" component={Xps} />
    <Route exact path="/zen" component={Zen} />
    <Route exact path="/purchase" component={Purchase} />
  </Switch>
)