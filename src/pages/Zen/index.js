import React from 'react'
import pic from '../../asset/Image 7.png';
import { Link } from 'react-router-dom'
import './index.css';
class Zen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '144900 Baht' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div id="container mx_auto">
        <br />
        <img class="lr" src={pic} alt="surface" />
        <br />
        <div class="right">
          <h1> Customize your ZenBook Pro </h1>
          <br />
          <p> 2.4GHz Intel Core i9-9980HK (octa-core, 16MB cache, up to 5GHz)   </p>
          <p> 32GB DDR4 RAM  </p> <p>Nvidia GeForce RTX 2060   </p>
          <p> 15.6-inch, OLED Ultra HD, 14-inch Ultra HD touch display </p>
          <p> 1 x Thunderbolt 3 </p> <p> 2 x USB-C 3.1  </p>
          <p> HDMI 2.0  </p>   <p> headset jack    </p>
          <p> Intel Wi-Fi 6 with Gig+ performance  </p>
          <p> IR webcam with Windows Hello support   </p>
          <br /> <h3> Select Storage </h3>
          <select value={this.state.value} onChange={this.handleChange} class="form-control form-control-lg"  >
            <option value="144900 Baht">256GB SSD Storage</option>
            <option value="154900 Baht">512GB SSD Storage</option>
            <option value="164900 Baht">1TB SSD Storage</option>
          </select>  <br />
          <h3> Price </h3>  <h3> {this.state.value} </h3>
          <Link to="/purchase" ><button type="button" class="btn btn-primary">Purchase</button></Link>
          <br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    )
  }
}
export default Zen