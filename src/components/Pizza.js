import React from 'react';

function Pizza() {
    return (
        <>
            <form>
                <label htmlFor='firstName'>First Name
                    <input 
                    id='firstName'
                    minLength='2'
                    maxLength='20'
                    placeholder='John'
                    name='name'
                    type='text'>
                    </input>
                </label><br/>
                <label htmlFor='lastName'>Last Name
                    <input 
                    id='lastName'
                    minLength='2'
                    maxLength='20'
                    placeholder='Smith'
                    name='name'
                    type='text'>
                    </input>
                </label><br/>

                <label htmlFor='pizzaSize'>Size</label>
                <select id='pizzaSize'>
                    <option value='1'>Small (8")</option>
                    <option value='2'>Medium (12")</option>
                    <option value='3'>Large (14")</option>
                    <option value='4'>Extra-Large (18")</option>
                </select>
                
                <input type='checkbox' id='pizzaToppings'/>
                <label htmlFor='pizzaToppings'>Pepperoni</label>

                <input type='checkbox' id='pizzaToppings'/>
                <label htmlFor='pizzaToppings'>Cheese</label>
                
                <input type='checkbox' id='pizzaToppings'/>
                <label htmlFor='pizzaToppings'>Pineapple</label>
                
                <input type='checkbox' id='pizzaToppings'/>
                <label htmlFor='pizzaToppings'>Sausage</label>
                
                <input type='checkbox' id='pizzaToppings'/>
                <label htmlFor='pizzaToppings'>Bacon</label>
                
                <input type='checkbox' id='pizzaToppings'/>
                <label htmlFor='pizzaToppings'>Chicken</label>


            </form>
        </>
    )
}

export default Pizza;