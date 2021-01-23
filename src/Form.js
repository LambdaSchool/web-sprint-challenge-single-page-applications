import './App.css';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import Input from './Input.js';
import Checkbox from './Checkbox.js';
import { useHistory } from 'react-router-dom';
import schema from './formSchema.js';




function Form() {
  // // ------------------ Initial States -------------

  const initialFormValues = {
    pizzaSize: '', 
    redOriginal: '',
    garlicRanch: '',
    bbqSauce: '',
    spinachAlfredo: '',
    sausage: false,
    canadianBacon: false,
    specialInstructions: '',
  };

  const initialFormErrors = {
    pizzaSize: '', 
    redOriginal: '',
    garlicRanch: '',
    bbqSauce: '',
    spinachAlfredo: '',
    sausage: false,
    canadianBacon: false,
    specialInstructions: '',
  };

  const history = useHistory();

  const initialDisabled = false; // change back to true after testing
  // -------------------- States -----------------
  const [pizza, setPizza] = useState({}); // empty object pizza
  const [formValues, setFormValues] = useState(initialFormValues); // inputs
  const [formErrors, setFormErrors] = useState(initialFormErrors); // errors, mechanism for reset
  const [disabled, setDisabled] = useState(initialDisabled) // boolean, for submit button 
  const [formState, setFormState] = useState(false); // checkbox

  // -------------------- Helper Functions -----------------
  const postNewPizza = newPizza => {
  axios.post('https://reqres.in/api/pizza', newPizza)
    .then(res => {
      setPizza(res.data)
      console.log("Successful res back from Axios, res.data: ", res.data)
      setFormValues(initialFormValues) // reset form
    })
    .catch(err => {
      console.log("Error: ", err)
      debugger
    })
  } // posts and resets form

  const validate = (name, value) => {
  console.log("validate: ", name, value)
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))

    console.log("passes form validation")
  }; // run validation with yup


  // -------------------- Event Handlers -----------------


  const inputChange = (e) => {
    const { name, type, value, checked } = e.target;
    // console.log(`name: ${name}, value: ${value}`);
    const inputValue = type === 'checkbox' ? checked : value;
    console.log("inputValue: ", inputValue)
    validate(name, inputValue);
    setFormValues({ ...formValues, [name]: inputValue }); // [ ] is not an array
  } 

  const formSubmit = (e) => {
    e.preventDefault(); //  to prevent browser refresh

    const newPizza = {
        pizzaSize: formValues.pizzaSize,
        redOriginal: formValues.redOriginal,
        garlicRanch: formValues.garlicRanch,
        bbqSauce: formValues.bbqSauce,
        spinachAlfredo: formValues.spinachAlfredo,
        sausage: formValues.sausage,
        canadianBacon: formValues.canadianBacon,
        specialInstructions: formValues.specialInstructions,
    }
    console.log("new pizza: ", newPizza)
    postNewPizza(newPizza) // post new pizza using helper function postNewPizza

    alert("Your Order Has Been Received!");

    

    history.push(`/`)

   };



    // -------------------- Side Effects -----------------

  //  useEffect(() => {
  //    schema.isValid(formValues).then(valid => setDisabled(!valid))
  //  }, [formValues]); // Adjust the status of 'disabled" every time formValues changes

  //  useEffect(() => {
  //   console.log("The form Errors have changed", formErrors)
  //  }, [formErrors]);


  return (
    <div>

<form onSubmit={formSubmit}>

<h2>Build Your Own Pizza</h2>
<h3>Choice of Size</h3>
<p>Required</p>

<select name="pizzaSize" onChange={inputChange} id="size-select">
  <option value="">Select</option>
  <option value="small">Small</option>
  <option value="medium">Medium</option>
  <option value="large">Large</option>
</select>

<h3>Choice of Sauce</h3>
<p>Required</p>

<input type="radio" name="sauce" value="originalRed"/> Original Red
<input type="radio" name="sauce" value="garlicRanch"/> Garlic Ranch
<input type="radio" name="sauce" value="bbqSauce"/> BBQ Sauce
<input type="radio" name="sauce" value="spinachAlfredo"/> Spinach Alfredo

<h3>Add Toppings</h3>
<p>Choose up to 10.</p>

<Checkbox topping={"pepperoni"} inputChange={inputChange} formValues={formValues}/>

{/* {add the rest of the toppings} */}

<h3>Choice of Substitute</h3>
<p>Choose up to 1.</p>

{/* {insert toggle here} */}

<h3>Instructions</h3> 

<Input
    type="text"
    name="specialInstructions"
    placeholder="Anything else you'd like to add?"
    onChange={inputChange} 
    value={formValues.specialInstructions}
    label={"Special Instructions"}
/> 

  <p>Incrementor goes here</p>

  <p>Add to Order Button</p>

  <button id="submitBtn" disabled={disabled}>Add To Order</button> 



  <div>{formErrors.name}</div>
  <div>{formErrors.email}</div>
  <div>{formErrors.password}</div>
  <div>{formErrors.role}</div>
  <div>{formErrors.acceptTerms}</div>



</form>


    </div>

  );
}

export default Form;