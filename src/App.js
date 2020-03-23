import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'
import Routing from './routes'
function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  let styles = {
    width: '200px',

  };
  return (
    <div id="container mx_auto">
      <div class="nav">
        <ul class="nav justify-content-center">
          <li style={styles} class="nav-item">
            <Link exact to="/" class="nav-link" >Home</Link>
          </li>
          <li style={styles} class="nav-item">
            <Link to="/mac" class="nav-link" >Macbook</Link>
          </li>
          <li style={styles} class="nav-item">
            <Link to="/surface" class="nav-link">Surface</Link>
          </li>
          <li style={styles} class="nav-item">
            <Link to="/swift" class="nav-link" >Swift</Link>
          </li>
          <li style={styles} class="nav-item">
            <Link to="/xps" class="nav-link" >XPS</Link>
          </li>
          <li style={styles} class="nav-item">
            <Link to="/zen" class="nav-link" >ZenBook</Link>
          </li>
        </ul>
      </div>
      
      <Routing />
    </div>


  );
}

export default App;
