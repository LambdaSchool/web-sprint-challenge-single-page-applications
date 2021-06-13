import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Completion from './components/Completion'
import Form from './components/Form'
import * as yup from 'yup'
import axios from 'axios'
import './App.css'

const initialForm = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  onion: false,
  mushroom: false,
  instructions: '',
}
const formSchema = yup.object().shape({
  name: yup
  .string()
  .required('Name is required')
  .min(2, 'Name must be 2 characters long'),
  size: yup.string(),
  pepperoni: yup.string(),
  sausage: yup.string(),
  mushroom: yup.string(),
  onion: yup.string(),
  instructions: yup.string(),
})

const App = () => {
  const [form,setForm]= useState();
  const [pizza,setPizza] = useState([]);
  const [disabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState(initialForm)
  
  const history = useHistory()
  
  useEffect(() =>{
    formSchema.isValid(form)
    .then(valid => setDisabled(!valid))
  },[form])
  

  const validateForm = (e) => {
    yup
    .reach(formSchema, e.target.name)
    .validate(e.target.type === 'checkbox' ? e.target.checked : e.target.value)
    .then(() => setErrors({...errors, [e.target.name]: ''}))
    .catch(err => setErrors({...errors, [e.target.name] : err.errors}))
  }

  const handleChange = (e) => {
    e.persist()
    e.target.type === 'checkbox' 
    ? setForm({...form, [e.target.name]: e.target.checked})
    : setForm({...form, [e.target.name]: e.target.value})
    validateForm(e);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://reqres.in/api/users', form)
    .then(res =>{
      setPizza([...pizza, res.data])
      setForm(initialForm)
      history.push('/complete')
    })
    .catch(err =>{
      console.log(err)
                                
    })
  }
  console.log(errors)
  return (
<>
    <>
    <div className="header">
      <h1>Lambda Pizza Parlour</h1>
      </div>
    </>
    <div>
      <Navigation />
      {errors.name.length > 0 && <p>{errors.name}</p>}
      <Switch>
        <Route path ='/pizza'>
          <Form 
          form={form} 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          disabled={disabled}
          />
        </Route>
        <Route path ='/complete'>
          <Completion
          pizza={pizza}
          />
        </Route>
        <Route path ='/'>
          <Home/>
        </Route>
      </Switch>
    </div>
    </>
  );
};
export default App;
