import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Container from './components/Container.jsx'
import Jakarta from './components/Jakarta.jsx'
import Mumbai from './components/Mumbai.jsx'
import Rio from './components/Rio.jsx'
import Tokyo from './components/Tokyo.jsx'
import { Routes, Route } from 'react-router-dom';

const baseURL = 'https://api.sunrisesunset.io/json'


function App() {

  useEffect(() => {
    axios.get(`${baseURL}`)
      .then(res => setText(res.json))
  })
  return (
    <div className="App">
      <div style={{
        backgroundImage: `url("./IMG_3055.jpeg")`
      }} />

      <div className="container">{Container}
        <nav className="navbar">
          <Routes>
            <Route path="" >Tokyo</Route>
            {/* <p className="navbar-item">Jakarta</p>
            <p className="navbar-item">Rio de Janeiro</p>
            <p className="navbar-item">Mumbai</p> */}
          </Routes>
        </nav>
      </div>

    </div >
  );
}

export default App;
