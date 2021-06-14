import React from "react";
import OrderDetails from "./OrderDetails";

export default function Order(props) {
  const { values, change, submit, disabled, errors, orders } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div>
      <form className="App" onSubmit={onSubmit}>
        <div>
          <h2>Build Your Own Pizza</h2>
        </div>
        <div>
          <h4>Your info</h4>
          <label>
            Name:
            <input
              value={values.name}
              onChange={onChange}
              name="name"
              type="text"
              placeholder="First and Last name"
            />
          </label>
        </div>
        <div>
          <h4>Your Pizza Build</h4>
          <label>
            Choice of size
            <select
              onChange={onChange}
              value={values.size}
              name="size"
              className="dropDown"
            >
              <option value="">Select a size</option>
              <option value="12"> 12-inch</option>
              <option value="14"> 14-inch</option>
              <option value="18"> 18-inch</option>
              <option value="half">Half-Sheet</option>
              <option value="full">Full-Sheet</option>
            </select>
          </label>
          <h4>Pick your toppings</h4>
          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={values.pepperoni}
              onChange={onChange}
              value="pepperoni"
            />
          </label>
          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              checked={values.sausage}
              onChange={onChange}
              value="sausage"
            />
          </label>
          <label>
            Bacon
            <input
              type="checkbox"
              name="bacon"
              checked={values.bacon}
              onChange={onChange}
              value="bacon"
            />
          </label>
          <label>
            Onion
            <input
              type="checkbox"
              name="onion"
              checked={values.onion}
              onChange={onChange}
              value="onion"
            />
          </label>
          <label>
            Extra cheese
            <input
              type="checkbox"
              name="extraCheese"
              checked={values.extraCheese}
              onChange={onChange}
              value="extraCheese"
            />
          </label>
          <label>
            Pinapple
            <input
              type="checkbox"
              name="pinapple"
              checked={values.pinapple}
              onChange={onChange}
              value="pinapple"
            />
          </label>
        </div>
        <div>
          <label>
            Special Instructions
            <input
              value={values.special}
              onChange={onChange}
              name="special"
              type="text"
            />
          </label>
        </div>
        <div>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <button disabled={disabled}>Add to Order</button>
        </div>
      </form>
      {orders.map((order) => {
        return <OrderDetails key={order.id} details={order} />;
      })}
    </div>
  );
}
