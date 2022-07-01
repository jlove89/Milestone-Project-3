import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// BEM
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/">
            <Header />
            <Home />
         </Route>
         </Switch>
      </div>
    </Router>
  );
}

export default App;