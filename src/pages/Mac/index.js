import React from 'react'
import pic from '../../asset/mac.png';
import { Link } from 'react-router-dom'
import './index.css';
class Mac extends React.Component {
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
          <select value={this.state.value} onChange={this.handleChange} class="form-control form-control-lg"  >
            <option value="64900 Baht">256GB SSD Storage</option>
            <option value="74900 Baht">512GB SSD Storage</option>
            <option value="94900 Baht">1TB SSD Storage</option>
          </select> <br />
          <h3> Price </h3>  <h3> {this.state.value} </h3>
          <Link to="/purchase" ><button type="button" class="btn btn-primary">Purchase</button></Link>
          <br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    )
  }
}
export default Mac
