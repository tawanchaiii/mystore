import React from 'react'

import { Link } from 'react-router-dom'
import './index.css';
export default () => (
  <div id="container mx_auto">
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div class="middle"><h1 class="middle">Thanks for your order.</h1>
      <h6 class="middle">We will email you when your items ship.</h6> <br/>
      <Link to="/" ><button type="button" class="btn btn-primary">Go to Homepage</button></Link>
      </div>
      
      <br />
  </div>
)
