import React from "react";
import { useHistory } from "react-router-dom";

export default function Homepage() {
  const history = useHistory();

  const routeToOrder = () => {
    console.log("going to order form");
    history.push("/pizza");
  };

  return (
    <div>
      <img className="home-image" src="../Assets/Pizza.jpg" alt="" />
      <button onClick={routeToOrder}>Order Now!</button>
    </div>
  );
}
