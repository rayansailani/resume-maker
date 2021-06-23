import React from "react";
import "./InputElement.css";
import CustomInputField from "./CustomInputElement";

const FormInputElement = (props) => {
  const id = "id" + props.label;
  const handleChangeInput = (event) => {
    props.handleChangeFunction(event.target.value);
  };
  if (props.type === "text" || props.type === "number") {
    return (
      <div className="input-field">
        <label className="input-label" htmlFor={id}>
          {props.label}
        </label>
        <input
          id={id}
          required={true}
          value={props.value}
          onChange={handleChangeInput}
          type={props.type}
          className={"input-element " + props.ClassName.toString()}
        />
      </div>
    );
  } else if (props.type === "textArea") {
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
  else{
    return <CustomInputField label={props.label}/>
  }
};
export default FormInputElement;
