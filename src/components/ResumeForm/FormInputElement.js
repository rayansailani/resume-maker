import React from "react";
import "./InputElement.css";

const FormInputElement = (props) => {
  const id = "id" + props.label;
  const handleChangeInput = (event) => {
    props.handleChangeFunction(event.target.value);
  };
  if (props.type === "text") {
    return (
      <div className="input-field">
        <label className="input-label" htmlFor={id}>
          {props.label}
        </label>
        <input
          id={id}
          value={props.value}
          onChange={handleChangeInput}
          type={props.type}
          className={"input-element " + props.ClassName.toString()}
        />
      </div>
    );
  } else {
    return (
      <div className="input-field">
        <label className="input-label" htmlFor={id}>{props.label}</label>
        <textarea
          id={id}
          value={props.value}
          onChange={handleChangeInput}
        ></textarea>
      </div>
    );
  }
  // else{
  //   return <CustomInputField label={props.label} changeFunction = {props.handleChangeFunction}/>
  // }
  
};
export default FormInputElement;
