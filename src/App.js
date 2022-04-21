import React, { useState, useEffect} from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Results from './components/Results';
import NavBar from './components/NavBar';
import "./App.css"

function App() {
  const [data, setData] = useState([]);
  const [gumboLikes,        setGumboLikes]         = useState(0);
  const [jambaLikes,        setJambaLikes]         = useState(0);
  const [baconShrimpLikes,  setBaconShrimpLikes]   = useState(0);
  const [shrimpSalmonLikes, setShrimpSalmonLikes]  = useState(0);
  const [blackSalmonLikes,  setBlackSalmonLikes]   = useState(0);
  const [surfTurfLikes,     setSurfTurfLikes]      = useState(0);

  function incrementLikes(value){
    switch(value) {
      case 'Gumbo':
        setGumboLikes(gumboLikes + 1);
        console.log(gumboLikes) 
        break;
      case 'Jambalaya':
        setJambaLikes(jambaLikes + 1);
        break;
      case 'Bacon and Shrimp Sliders':
        setBaconShrimpLikes(baconShrimpLikes + 1);
        break;
      case 'Shrimp Stuffed Salmon':
        setShrimpSalmonLikes(shrimpSalmonLikes + 1);
        break;
      case 'Blackened Salmon with Rice & Peas':
        setBlackSalmonLikes(blackSalmonLikes + 1);
        break;
      case 'Surf and Turf':
        setSurfTurfLikes(surfTurfLikes + 1);
        break;
      default: console.log("ERROR: Dish not found")
      }
  }

  useEffect(() => {
    fetch('http://localhost:3000/SimsCafe')
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <header className="App-header"> Sim's Cafe
        </header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/results">
            <Results gumboLikes={gumboLikes}
                     jambaLikes={jambaLikes}
                     baconShrimpLikes={baconShrimpLikes}
                     shrimpSalmonLikes={shrimpSalmonLikes}
                     blackSalmonLikes={blackSalmonLikes}
                     surfTurfLikes={surfTurfLikes} />
          </Route>
          <Route path="/">
            <Home data={data} handleLikeClick={incrementLikes} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
