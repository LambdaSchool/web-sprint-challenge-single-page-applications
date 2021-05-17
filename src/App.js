import React from "react";
import {Switch, Route, Router } from "react-router-dom";
import homepage from "./Homepage"
import Orderform from "./Orderform"

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <div className="App">
        <Router>
          <Route exact path="/" component={homepage} />
          <Route path="/" component={Orderform} />
        </Router>
        
      </div>
    </>
  );
};
export default App;
