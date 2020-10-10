
import React from 'react'


const Form = () =>{


    return (
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
                <label htmlFor="Psize">Size</label>
                <select name="Psize" required>
                    <option value="XXL">XXL</option>
                    <option value="Large">Large</option>
                    <option value="Small">SMall</option>
                </select>
                <label htmlFor="pep">Pepperronie</label>
                <input type="checkbox" name="pep" />
                <label htmlFor="pine">Pineapple</label>
                <input type="checkbox" name="pine" />
                <label htmlFor="olive">Olive</label>
                <input type="checkbox" name="olive" />
                <label htmlFor="sardines">Sardines</label>
                <input type="checkbox" name="sardines" />
                <label htmlFor="order">Order Now</label>
                <button name="order">Add 2 Order</button>

            </form>
        </div>
    );
};

export default Form;
