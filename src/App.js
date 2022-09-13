import "./App.css";
import React from "react";
import FetchCuriosityPhotos from "./Curiosity.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import FetchPerseverancePhotos from "./Perseverence.js";

// /Users/jacqueline/Coding_Projects/mars-latest-photos/src/Perseverence.js

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/Curiosity">
            <FetchCuriosityPhotos />
          </Route>
        </Switch>
        <Switch>
          <Route path="/Perseverance">
            <FetchPerseverancePhotos />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
