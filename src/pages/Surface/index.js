import React from 'react'
import pic from '../../asset/Image 4.png';
import { Link } from 'react-router-dom'
import './index.css';
class Surface extends React.Component {
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
export default Surface

