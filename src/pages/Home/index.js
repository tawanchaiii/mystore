import React from 'react'
import mac from '../../asset/mac.png';
import surface from '../../asset/Image 1.png';
import swift from '../../asset/Image 2.png';
import xps from '../../asset/xps.png';
import zen from '../../asset/Image 3.png';
import { Link } from 'react-router-dom'
import './index.css';
export default () => (
  <div id="container mx_auto">
      <br/><br/><br/>
      <h1 class="middle">Macbook Pro</h1>
      <h6 class="middle">Prolong in the dark</h6> <br/>
      <Link to="/mac" >  <img class="k" src={mac} alt="mac" /> </Link> 
      <Link to="/surface" > <img class="l" src={surface} alt="surface" /> </Link> 
      <Link to="/swift" > <img class="l" src={swift} alt="swift" /> </Link> 
      <Link to="/xps" > <img class="l" src={xps} alt="xps" /> </Link> 
      <Link to="/zen" ><img class="l" src={zen} alt="zen" /> </Link> 
      <br />
  </div>
)