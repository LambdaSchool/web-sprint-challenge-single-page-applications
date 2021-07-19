import React from "react";
import { Link, Route } from "react-router-dom";
import Form from "./Form";

function Home() {

    return (

        <div className="homePage">
           <nav>
             <h1>Home of the Punko Pizza!!</h1>
             <img src="https://i.redd.it/gbaa61y9nxn21.jpg" />
             <h1>And the Crispy Critter Specialties!</h1>
             <img src="https://godrunning.com/wp-content/uploads/2016/03/burnt-pizza-by-isriya-paireepairit-cc.jpg" />
           
           </nav>
           
       </div>
       
          );
       
       }
       
       export default Home;