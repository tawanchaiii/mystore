import React from 'react'
import pic from '../../asset/Image 4.png';
import { Link } from 'react-router-dom'
import './index.css';
export default () => (
  <div id="container mx_auto">
    <br />
    <img class="lr" src={pic} alt="surface" />
    <br />
    <div class="right">
      <h1> Customize your Surface Pro X </h1>
      <br />
      <p> Microsoft® SQ1™ </p>
      <p> 8GB or 16GB LPDDR4x RAM </p> <p>PixelSense™ Display  </p>
      <p> Microsoft® SQ1™ Adreno™ 685 GPU  </p>
      <p> 2 x USB-C®  </p> <p> 1 x Surface Connect port </p>
      <p> Surface Keyboard connector port  </p>   <p> 1 x nano SIM   </p>
      <p> Compatible with Surface Dial off-screen interaction*  </p> <p> Firmware TPM   </p>
      <p> Enterprise-grade protection with Windows Hello face sign-inBacklit   </p>
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
