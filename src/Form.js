import React, {useState} from "react";


const Form = props => {
    const [pizzaOrder, setPizzaOrder] =useState({name:'', pizzaSize: '', toppingOne: false, toppingTwo:false, toppingThree:false, toppingFour:false, specialRequest: ''});

    const handlerUpdate = event => {
        setPizzaOrder({...pizzaOrder, [event.target.name]:event.target.value});
        console.log(event.target.name);
        console.log(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log("Pizza Order Submitted");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="order-name">
                <h3>Build Your Own Pizza</h3>
                <label htmlfor="nameInput">Name: </label>
                  <input 
                    onChange={handlerUpdate}
                    placeholder="Name For The Order"
                    id="nameInput"
                    name="Name"
                    type="text"
                    value={pizzaOrder.name}
                 />
            </div>

            <div className="order-size">
                <h3>Choice Of Size</h3>
                <p>Required</p>
                <label htmlFor="sizeInput"></label>
                    <select 
                    onChange={handlerUpdate}              id='sizeInput' 
                        name= 'size'>
                        <option value='Small'>Small Pizza: 8-10 inches with 6 slices</option>
                        <option value='Medium'>Medium Pizza: 12 inches with 8 slices.</option>
                        <option value='Large'>Large Pizza: 14 inch with 10 slices.
                        </option>
                        <option value='Extra-Large'>Extra-large Pizza: 16-18 inch with 12 slices.</option>
                    </select>
            </div>

            <div className="cheeseandsauce">
                <h3>Cheese and Sauce</h3>
            <div className="cheese">
                <label htmlFor="cheesetopping">Cheese </label>
                <input
                onChange={handlerUpdate}
                id="cheesetopping"
                name="Cheese"
                type="checkbox"
                />
                <select>
                    <option value="Light">Light</option>
                    <option value="Normal">Normal</option>
                    <option value="Extra">Extra</option>
                    <option value="Double">Double</option>
                </select>
                <label htmlFor="saucetopping"> Sauce</label>
                <input
                onChange={handlerUpdate}
                id="saucetopping"
                name="Sauce"
                type="checkbox"
                />
                <select>
                    <option value="Light">Light</option>
                    <option value="Normal">Normal</option>
                    <option value="Extra">Extra</option>
                    <option value="Double">Double</option>
                </select>
            </div>
            </div>

            <div className="meattoppings">
                <h3>Choose Meat Toppings</h3>
            <div className="pork">
                <h4>Pork</h4>
                <label htmlFor="toppingOne">Pepperoni </label>
                <input
                onChange={handlerUpdate}
                id="toppingOne"
                name="Pepperoni"
                type="checkbox"
                />
                <select>
                    <option value="Half">Half</option>
                    <option value="Whole">Whole</option>
                </select>
                <label htmlFor="toppingtwo"> Bacon </label>
                <input
                onChange={handlerUpdate}
                id="toppingtwo"
                name="Bacon"
                type="checkbox"
                />
                <select>
                    <option value="Half">Half</option>
                    <option value="Whole">Whole</option>
                </select>
                <label htmlFor="toppingthree"> Ham </label>
                <input
                onChange={handlerUpdate}
                id="toppingthree"
                name="Ham"
                type="checkbox"
                />
                <select>
                    <option value="Half">Half</option>
                    <option value="Whole">Whole</option>
                </select>
                <label htmlFor="toppingfour"> Italian Sausage </label>
                <input
                onChange={handlerUpdate}
                id="toppingfour"
                name="Italian Sausage"
                type="checkbox"
                />
                <select>
                    <option value="Half">Half</option>
                    <option value="Whole">Whole</option>
                </select>
            </div>
            <div className="chickenandbeef">
                <h4>Chicken and Beef</h4>
                <label htmlFor="toppingfive">BBQ Chicken </label>
                <input
                onChange={handlerUpdate}
                id="toppingtwo"
                name="BBQ Chicken"
                type="checkbox"
                />
                <select>
                    <option value="Half">Half</option>
                    <option value="Whole">Whole</option>
                </select>
                <label htmlFor="toppingsix"> Philly Cheese Steak </label>
                <input
                onChange={handlerUpdate}
                id="toppingsix"
                name="Philly Cheese Steak"
                type="checkbox"
                />
                <select>
                    <option value="Half">Half</option>
                    <option value="Whole">Whole</option>
                </select>
                
            </div>
            </div>
            

        </form>
    )

}