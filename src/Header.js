import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import PizzaForm from "./PizzaForm";
import "./App.css";
import Logo from "./Pizza.jpg";

function PizzaHeader() {
return (<Router>
  <div className="nav-links">
    <div className="navBar">
      <div className="link1">
        <h1>Ratatouille's Pizzeria</h1>
        <Link to="/">Home</Link>
  </div>
      <div className="link2">
        <Link to="/Form">Order Online</Link><img src={Logo} alt ="pizza"/>
        <Route path="/Form">
        <PizzaForm/>
      </Route>
     </div> 
     </div>
</div>
   </Router>
   );}
export default PizzaHeader