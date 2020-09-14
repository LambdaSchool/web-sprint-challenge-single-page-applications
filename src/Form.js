import React, {useState, useEffect} from "react";
import * as yup from "yup";
import axios from "axios"


const Form = props => {

    const defaultState= {
        name:'', 
        pizzaSize: '', 
        toppingOne: false, 
        toppingTwo:false, 
        toppingThree:false, 
        toppingFour:false, 
        specialRequest: ''
    }
    const [pizzaOrder, setPizzaOrder] =useState(defaultState);

    const [errors, setErrors]= useState(defaultState);
    const [goodAlert, setGoodAlert]= useState(false)
    
    let formSchema=yup.object().shape({
        name: yup
            .string()
            .required("Name Must Be At Least 2 Characters"),
        pizzaSize: yup
            .string()
            .required("Please Pick A Size"),
        toppingOne: yup
            .boolean(),
        toppingTwo: yup
            .boolean(),
        toppingThree: yup
            .boolean(),
        toppingFour: yup
            .boolean(),
        specialRequest: yup
            .string()
            .required("Please Add Specific Delivery Instructions or Substitutions")
    });

    useEffect(() => {
        if(formSchema === false) {
            setGoodAlert(pizzaOrder.toppingOne)

        }
    }, [pizzaOrder])

    const formSubmit = e => {
        e.preventDefault();
        console.log("Pizza Order Submitted");
            axios
                .post("https://reqres.in/api/users", pizzaOrder)
                .then(() => console.log("Order Submitted Working On It!"))
                .catch(err => console.log(err));
    };

    const validateChange = e => {
        e.persist();
        if(e.target.value.length === 0) {
            setErrors({
                ...errors,
                [e.target.name]: `${e.target.name} Name Must Be More Than Two Characters`
            });
        };
    };

    const inputChange = e => {
        const value = 
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setPizzaOrder({
            ...pizzaOrder,
            [e.target.name]: value
        });
        validateChange(e);
    }

    /*const handlerUpdate = event => {
        setPizzaOrder({...pizzaOrder, [event.target.name]:event.target.value});
        console.log(event.target.name);
        console.log(event.target.value);
    };*/

 

    return (
        <form onSubmit={formSubmit} style={{marginLeft: "5%", marginRight:"5%", display: "flex", flexFlow: "column", fontFamily: "'Pacifico', cursive"}}>
            
            <div className="order-name" style={{border: "1px solid black", padding: "1%", marginTop: "3%", backgroundColor: "#e63946"}}>
                <h3 style={{marginBottom: "2%"}}>Build Your Own Pizza</h3>
                <h6>Name: </h6>
                  <input 
                    style={{marginLeft: "1%"}}
                    id="nameInput"
                    type="text"
                    name="name"
                    placeholder="Name For The Order"
                    onChange={inputChange}
                    label="Name"
                    value={pizzaOrder.name}
                    errors={errors}
                 />
            </div>

            <div className="order-size" style={{border: "1px solid black" ,padding: "1%", backgroundColor: "#f1faee"}}>
                <h3 style={{marginBottom: "2%"}}>Choice Of Size<span style={{fontSize: "1.0rem", marginLeft: "1%"}}>..(Required)</span></h3>
                    <select 
                        onChange={inputChange} 
                        errors={errors}             label='sizeInput' 
                        name= 'size'>
                        <option value='Small'>Small Pizza: 8-10 inches with 6 slices</option>
                        <option value='Medium'>Medium Pizza: 12 inches with 8 slices.</option>
                        <option value='Large'>Large Pizza: 14 inch with 10 slices.
                        </option>
                        <option value='Extra-Large'>Extra-large Pizza: 16-18 inch with 12 slices.</option>
                    </select>
            </div>

            <div className="cheeseandsauce" style={{border: "1px solid black" ,padding: "1%", backgroundColor: "#e63946"}}>
                <h3>Cheese and Sauce</h3>

            <div className="cheese">

                <h6>Cheese </h6>
                <input
                style={{marginLeft: "1%"}}
                onChange={inputChange}
                id="cheesetopping"
                name="Cheese"
                type="checkbox"
                label="cheesetopping"
                errors={errors}
                />

                <h6 style={{marginLeft: "1%"}}> Sauce</h6>
                <input
                style={{marginLeft: "1%"}}
                onChange={inputChange}
                id="saucetopping"
                name="Sauce"
                type="checkbox"
                label="saucetopping"
                errors={errors}
                />
            </div>
            </div>

            <div className="meattoppings" style={{border: "1px solid black" ,padding: "1%", backgroundColor: "#f1faee"}}>
                <h3 style={{marginBottom: "1%"}}>Choose Meat Toppings</h3>

            <div className="pork">
                <h4 style={{marginBottom: "1%"}}>Pork</h4>

                <label htmlFor="toppingOne" style={{marginLeft: "1%"}}>Pepperoni </label>
                <input
                style={{marginLeft: "1%"}}
                onChange={inputChange}
                id="toppingOne"
                name="Pepperoni"
                type="checkbox"
                errors={errors}
                />

                <label htmlFor="toppingtwo" style={{marginLeft: "1%"}}> Bacon </label>
                <input
                style={{marginLeft: "1%"}}
                onChange={inputChange}
                id="toppingtwo"
                name="Bacon"
                type="checkbox"
                errors={errors}
                />
               
                <label htmlFor="toppingthree" style={{marginLeft: "1%"}}> Ham </label>
                <input
                style={{marginLeft: "1%"}}
                onChange={inputChange}
                id="toppingthree"
                name="Ham"
                type="checkbox"
                errors={errors}
                />
                
                <label htmlFor="toppingfour" style={{marginLeft: "1%"}}> Italian Sausage </label>
                <input
                style={{marginLeft: "1%"}}
                onChange={inputChange}
                id="toppingfour"
                name="Italian Sausage"
                type="checkbox"
                errors={errors}
                />
               
            </div>
            <div className="chickenandbeef">
                <h4 style={{marginBottom: "1%", marginTop: "1%"}}>Chicken and Beef</h4>
                <label htmlFor="toppingfive" style={{marginLeft: "1%"}}>BBQ Chicken </label>
                <input
                style={{marginLeft: "1%"}}
                onChange={inputChange}
                id="toppingtwo"
                name="BBQ Chicken"
                type="checkbox"
                errors={errors}
                />
             
                <label htmlFor="toppingsix" style={{marginLeft: "1%"}}> Philly Cheese Steak </label>
                <input
                style={{marginLeft: "1%"}}
                onChange={inputChange}
                id="toppingsix"
                name="Philly Cheese Steak"
                type="checkbox"
                errors={errors}
                />  
            </div>
            </div>
            <div className="nonmeattoppings" style={{border: "1px solid black" ,padding: "1%", backgroundColor: "#e63946"}}>
                <h3 style={{marginBottom: "1%"}}>Choose Non-Meat Toppings</h3>

                <label htmlFor="toppingseven" style={{marginLeft: "1%"}}> Onions </label>
                <input
                style={{marginLeft: "1%"}}
                onChange={inputChange}
                id="toppingseven"
                name="Onions"
                type="checkbox"
                errors={errors}
                />
                
                <label htmlFor="toppingeight" style={{marginLeft: "1%"}}> Green Peppers </label>
                <input
                style={{marginLeft: "1%"}}
                onChange={inputChange}
                id="toppingeight"
                name="Green Pepper"
                type="checkbox"
                errors={errors}
                />
                
                <label htmlFor="toppingnine" style={{marginLeft: "1%"}}> Black Olives </label>
                <input
                style={{marginLeft: "1%"}}
                onChange={inputChange}
                id="toppingnine"
                name="Black Olives"
                type="checkbox"
                errors={errors}
                />
                
                <label htmlFor="toppingten" style={{marginLeft: "1%"}}> Mushrooms </label>
                <input
                style={{marginLeft: "1%"}}
                onChange={inputChange}
                id="toppingten"
                name="Mushrooms"
                type="checkbox"
                errors={errors}
                />
                
                <div className="fruittoppings">
                <label htmlFor="toppingeleven" style={{marginLeft: "1%"}}> Pineapple </label>
                <input
                style={{marginLeft: "1%"}}
                onChange={inputChange}
                id="toppingeleven"
                name="Pinapple"
                type="checkbox"
                errors={errors}
                />
                
                <label htmlFor="toppingtwelve" style={{marginLeft: "1%"}}> Banana Peppers </label>
                <input
                style={{marginLeft: "1%"}}
                onChange={inputChange}
                id="toppingtwelve"
                name="Banana Pepper"
                type="checkbox"
                errors={errors}
                />
                
                </div>
            </div>
            <div className="specialrequest" style={{border: "1px solid black" ,padding: "1%", backgroundColor: "#f1faee"}}>
            <h3>Special Requests/Directions</h3>
                <label htmlfor="specialrequestinput"></label>
                  <input 
                    onChange={inputChange}
                    placeholder="Please Leave Special Requests and Directions For Our Team Here"
                    id="specialrequestinput"
                    name="Special Request"
                    type="text"
                    value={pizzaOrder.specialRequest}
                    errors={errors}
                 />
            </div>
            <button onSubmit={formSubmit} style={{backgroundColor: "#e63946"}}>Order Now</button>
        </form>
    )

}

export default Form;