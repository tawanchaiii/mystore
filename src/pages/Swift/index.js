import React from 'react'
import pic from '../../asset/Image 5.png';
import { Link } from 'react-router-dom'
import './index.css';
class Swift extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '64900 Baht' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
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
          <select value={this.state.value} onChange={this.handleChange} class="form-control form-control-lg"  >
            <option value="64900 Baht">256GB SSD Storage</option>
            <option value="74900 Baht">512GB SSD Storage</option>
            <option value="94900 Baht">1TB SSD Storage</option>
          </select>  <br />
          <h3> Price </h3>  <h3> {this.state.value} </h3>
          <Link to="/purchase" ><button type="button" class="btn btn-primary">Purchase</button></Link>
          <br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    )
  }
}
export default Swift
