import React from "react";

export default function Form(props) {
  const { values, update, submit, disabled, errors } = props;
  const onChange = (evt) => {
    // passes in the name of the form, and the value of the form
    const target = evt.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    update(name, value); // function from parent component App.js
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label>
          {" "}
          Name
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="Type a Name"
            maxLength="30"
          />
        </label>

        <label>
          {" "}
          Pizza Size
          <select name="size" value={values.size} onChange={onChange}>
            <option value="">-- Select Size --</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

        <div className="errors">
          <div>{errors.name}</div>
        </div>

        <div className="submit">
          <button disabled={disabled}>Submit!</button>
        </div>
      </div>
    </form>
  );
}
