import React from 'react'
import { useHistory } from 'react-router-dom'


export default function Form(props){
    const history = useHistory()

    const{name, size, pepperoni, sausage, mushroom, onion, instructions, handleChange, handleSubmit, disabled } = props
    
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Your Name:
                <input id='name' name='name' value={name} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Pizza Size:
                <select name='size' value={size} onChange={handleChange}>
                    <option value='S'>Small</option>
                    <option value='M'>Medium</option>
                    <option value='L'>Large</option>
                    <option value='XL'>X-Large</option>
                </select>
            </label>
            <div>
                <h4>Desired Toppings</h4>
                <label>
                    Pepperoni:
                    <input id='pepperoni' name='pepperoni' type='checkbox' checked={pepperoni} onChange={handleChange}/>
                </label>
                <label>
                    Sausage:
                    <input id='sausage' name='sausage' type='checkbox'checked={sausage} onChange={handleChange}/>
                </label>
                <label>
                    Mushroom:
                    <input id='mushroom' name='mushroom' type='checkbox'checked={mushroom} onChange={handleChange}/>
                </label>
                <label>
                    Onion:
                    <input id='onion' name='onion' type='checkbox'checked={onion} onChange={handleChange}/>
                </label>
                <label>
                    <br />
                    Special Instructions
                    <input id='instructions' name='instructions' type='textbox' value={instructions} onChange={handleChange}/>
                </label>
            </div>
            <button id='submitButton' disabled={disabled} type='submit'>Place Order</button>
        </form>
    )
}