import React from 'react'
import pic from '../../asset/Image 5.png';
import { Link } from 'react-router-dom'
import './index.css';
export default () => (
  <div id="container mx_auto">
    <br />
    <img class="lx" src={pic} alt="surface" />
    <br />
    <div class="right">
      <h1> Customize your Acer Swift 7 </h1>
      <br />
      <p> 1.5GHz Intel Core i7-8500Y (dual-core, 4MB cache, up to 4.2GHz)  </p>
      <p> 8GB LPDDR3 RAM  </p> <p>Full HD CineCrystal IPS touch display  </p>
      <p> Microsoft® SQ1™ Adreno™ 685 GPU  </p>
      <p> 2 x Thunderbolt 3 (USB-C), headset jack  </p>
      <p>Intel Wireless-AC 9260 802.11ac Wi-Fi, Bluetooth </p>
      <br /> <h3> Select Storage </h3>
      <select class="form-control form-control-lg" id="mySelect" >
        <option value="20 Baht">256GB SSD Storage</option>
        <option value="30 Baht">512GB SSD Storage</option>
        <option value="40 Baht">1TB SSD Storage</option>
      </select> <br />
      <h3> Price </h3>  <h3> 144,900 Baht </h3>
      <Link to="/" ><button type="button" class="btn btn-primary">Purchase</button></Link>
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  </div>
)
