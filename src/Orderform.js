import React, { useState, useEffect} from 'react'
 import * as yup from 'yup'
 import { Dropdown } from 'react-dropdown'

 export default function Orderform(props) {

     const [order, setOrder] = useState({
         name: '',
         size: '',
         pepperoni: false,
         olives: false,
         chicken: false, 
         tomatoes: false,
         special: '',
     })

     const options = [
         {value: 'small', label: 'Small'},
         {value: 'medium', label: 'Medium'},
         {value: 'large', label: 'Large'}
     ];
     const defaultOptoin = options[0];


     const schema= yup.object().shape({
         name: yup.string().required('name required').min(2, 'name must be at least 2 characters long'),
         pepperoni: yup.boolean(),
         olives: yup.boolean(),
         chicken: yup.boolean(),
         tomatoes: yup.boolean(),
         special: yup.string(),


        })


     return (
         <div>
             <form>
                 <input name = 'name' type= 'text' placeholder= 'Name'/>
             </form>
         <p>
         <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;
         </p>
         </div>
     )
 }