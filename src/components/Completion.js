import React from 'react'

export default function Completion (props) {
    const { pizza } = props

    return (
    <div className="review">
        <h3>Review Your Order</h3>
        {pizza.map(myPizza => {
            return(
                <div key= {myPizza.id}>
                    <h4> Name: {myPizza.name} </h4>
                    <p> Size: {myPizza.size} </p>
                    <p>Desired Toppings:</p>
                    {myPizza.pepperoni && <p>Pepperoni</p>}
                    {myPizza.sausage && <p>Sausage</p>}
                    {myPizza.peppers && <p>Peppers</p>}
                    {myPizza.onion && <p>Onion</p>}
                    <p> Special Instructions: {myPizza.specialrequest} </p>
                </div>
            )
        })}
    </div>
    )
}