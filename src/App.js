import React, { useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Results from './components/Results'
import NavBar from './components/NavBar'
import "./App.css"
const API = 'http://localhost:3000/SimsCafe/'

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
        fetch(`${API}1`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                likes: gumboLikes,
              })
            })
        break;
      case 'Jambalaya':
        setJambaLikes(jambaLikes + 1);
        fetch(`${API}2`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            likes: jambaLikes,
          })
        })
        break;
      case 'Bacon and Shrimp Sliders':
        setBaconShrimpLikes(baconShrimpLikes + 1);
        fetch(`${API}3`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            likes: baconShrimpLikes,
          })
        })
        break;
      case 'Shrimp Stuffed Salmon':
        setShrimpSalmonLikes(shrimpSalmonLikes + 1);
        fetch(`${API}4`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            likes: shrimpSalmonLikes,
          })
        })
        break;
      case 'Blackened Salmon with Rice & Peas':
        setBlackSalmonLikes(blackSalmonLikes + 1);
        fetch(`${API}5`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            likes: blackSalmonLikes,
          })
        })
        break;
      case 'Surf and Turf':
        setSurfTurfLikes(surfTurfLikes + 1);
        fetch(`${API}6`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            likes: surfTurfLikes,
          })
        })
        break;
      default: console.log("ERROR: Dish not found")
      }
  }

  // function patchLikes(id){
  //   fetch(`${API}${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       likes: ,
  //     })
  //   })
  // }

  useEffect(() => {
    fetch(API)
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
            {/* <Results gumboLikes={gumboLikes}
                     jambaLikes={jambaLikes}
                     baconShrimpLikes={baconShrimpLikes}
                     shrimpSalmonLikes={shrimpSalmonLikes}
                     blackSalmonLikes={blackSalmonLikes}
                     surfTurfLikes={surfTurfLikes} /> */}
            <Results data={data} />
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
