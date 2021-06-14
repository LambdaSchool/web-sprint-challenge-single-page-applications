import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Order from "./components/Order";
import Axios from "axios";
import * as yup from "yup";
import schema from "/validation/formSchema";

const startFormValues = {
  name: "",
  special: "",
  size: "",
  pepperoni: false,
  sausage: false,
  bacon: false,
  extraChesse: false,
  pinapple: false,
};
const startFormErrors = {
  name: "",
  size: "",
};

const startOrders = [];
const startDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(startOrders);
  const [formValues, setFormValues] = useState(startFormValues);
  const [disabled, setDisabled] = useState(startDisabled);
  const [formErrors, setFormErrors] = useState(startFormErrors);

  const postNewOrder = (newOrder) => {
    Axios.post("https://reqres.in/api/order", newOrder)
      .then((res) => {
        setOrders([...orders, res.data]);
        setFormValues(startFormValues);
      })
      .catch((error) => {
        setFormValues(startFormValues);
        console.log(error);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      special: formValues.special.trim(),
      size: formValues.size,
      toppings: [
        "pepperoni",
        "sausage",
        "bacon",
        "onion",
        "extraCheese",
        "pinapple",
      ].filter((top) => formValues[Top]),
    };
    postNewOrder(newOrder);
  };
  useEffect(() => {
    Schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <>
      <div>
        <nav>
          <h1>Lambda Eats</h1>
          <div>
            <Link to="/">Home</Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/pizza">
            <Order
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              orders={orders}
              disabled={disabled}
              errors={formErrors}
            />
          </Route>
        </Switch>
      </div>
    </>
  );
};
export default App;
