import React from 'react'
import pic from '../../asset/mac.png';
import { Link } from 'react-router-dom'
import './index.css';
export default () => (
  <div id="container mx_auto">
    <br />
    <img class="lr" src={pic} alt="mac" />
    <br />
    <div class="right">
      <h1> Customize your MacBook Pro </h1>
      <br />
      <p> 1.4GHz quad‑core 8th‑generation Intel Core i5 processor</p>
      <p> 8GB 2133MHz LPDDR3 memory </p> <p> Retina display with True Tone </p>
      <p> Intel Iris Plus Graphics 645 </p>
      <p> Touch Bar and Touch ID Backlit </p>  <p> Keyboard - US English</p>
      <br /> <h3> Select Storage </h3>
      <select class="form-control form-control-lg" id="mySelect" >
        <option value="20 Baht">256GB SSD Storage</option>
        <option value="30 Baht">512GB SSD Storage</option>
        <option value="40 Baht">1TB SSD Storage</option>
      </select> <br />
     <h3> Price </h3>  <h3> 144,900 Baht </h3> 
     <Link to="/purchase" ><button type="button" class="btn btn-primary">Purchase</button></Link>
     <br /><br /><br /><br /><br /><br /><br />
    </div>
   
  </div>
)
