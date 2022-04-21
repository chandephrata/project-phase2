import React, { useState, useEffect} from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Results from './components/Results';
import "./App.css"

// need onClick handlers for NavBar to send data back about which route we're on and have the App handle that to determine which component to render
function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/SimsCafe')
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  return (
    <Router>
      <div className="App">
        <header className="App-header"> Sim's Cafe
        </header>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/about" element={<About />} />
            <Route path="/results" element={<Results />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
