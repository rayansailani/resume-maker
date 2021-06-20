import React from "react";
import "./InputElement.css";

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
          // className={"input-element " + props.ClassName.toString()}
        ></textarea>
      </div>
    );
  }
  else{
    // return <p>This is else</p>
    return null;
  }
  // return (
  //   <div className="input-field">
  //     <label className="input-label" htmlFor={id}>
  //       {props.label}
  //     </label>
  //     {(props.type === "text" || props.type === "number") && (
  //       <input
  //         id={id}
  //         required={true}
  //         value={props.value}
  //         onChange={handleChangeInput}
  //         type={props.type}
  //         className={"input-element " + props.ClassName.toString()}
  //       />
  //     )}
  //     {props.type === "textArea" && (
  //       <textarea
  //         id={id}
  //         value={props.value}
  //         onChange={handleChangeInput}
  //         ClassName={"input-element " + props.ClassName.toString()}
  //       ></textarea>
  //     )}
  //   </div>
  // );
};
export default FormInputElement;
