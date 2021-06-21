import React from "react";

const CustomInputField = (props) => {
  console.log(props.config);
  return (
    <div>
      {props.config.map((inputElement) => {
        return (
          <div>
            <label htmlFor={inputElement.label}>{inputElement.label}</label>
            <input type={inputElement.type} id={inputElement.label} />
          </div>
        );
      })}
    </div>
  );
};
export default CustomInputField;