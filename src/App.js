import React, { useState, useEffect} from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Results from './components/Results';

// need onClick handlers for NavBar to send data back about which route we're on and have the App handle that to determine which component to render
function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/SimsCafe')
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>
        <NavBar />
        <Home data={data} />
    </div>
  );
}

export default App;
