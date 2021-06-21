import React, {useState} from "react";
import "./InputElement.css";
import CustomInputField from "./CustomInputElement";

const FormInputElement = (props) => {
  const id = "id" + props.label;
  const handleChangeInput = (event) => {
    props.handleChangeFunction(event.target.value);
  };
  
  const customInputChange = (values) =>{
    console.log(values);
  }
  // custom input element configuration
  const customInputConfig = {
    Education:
      [{label:"Name of institution", type:"text", start:"NULL", stop:"NULL"},
      {label:"Year of passing", type:"date", include:"true", stop:"false"},
      {label:"Score", type:"number", include:"true", stop:"true"}],
     Project:[
      {label:"Name", type:"text", start:"NULL", stop:"NULL"},
      {label:"Tools", type:"text", start:"NULL", stop:"NULL"},
      {label:"Description", type:"text", start:"NULL", stop:"NULL"},
     ],
     Experience:[
      {label:"Name of Organisation", type:"text", start:"NULL", stop:"NULL"},
      {label:"Role", type:"text", start:"NULL", stop:"NULL"},
      {label:"Start Date", type:"Date", start:"NULL", stop:"NULL"},
      {label:"End Date", type:"Date", start:"NULL", stop:"NULL"},
     ],  
  };
  const [fields, setFields] = useState([<CustomInputField config ={customInputConfig[props.label]} handleInputChange={customInputChange} />]);
  const handleExtra = (event) =>{
    event.preventDefault();
    setFields((prevs)=>{
      return [...prevs, <CustomInputField config ={customInputConfig[props.label]} handleInputChange={customInputChange} />]
    })
  }

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
    return (
      <div>
    {fields.map(ip=>ip)}
    <button onClick={handleExtra}>Add an additional {props.label} </button>
    </div>
    );
  }
};
export default FormInputElement;
