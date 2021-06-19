import React from "react";

const FormInputElement = (props) => {
  const id = "id" + props.label;
  const handleChangeInput = (event) => {
    props.handleChangeFunction(event.target.value);
  };
  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input
        type="text"
        id={id}
        required={true}
        value={props.value}
        onChange={handleChangeInput}
      />
    </div>
  );
};
export default FormInputElement;
