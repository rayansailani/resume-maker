import React from "react";
import { useState } from "react";
import FormInputElement from "./FormInputElement";
const FormCollection = (props) => {
  const [userName, setName] = useState("");
  const [userAge, setAge] = useState("");
  const [userDescription, setDescription] = useState("");
  let userDetails = {};

  const handleNameChange = (name) => {
    setName(name);
  };
  const hangdleAgeChange = (age) => {
    setAge(age);
  };
  const handelDescriptionChange = (desc) => {
    setDescription(desc);
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();
    userDetails = {
      ...userDetails,
      name: userName,
      age: userAge,
      desc: userDescription,
    };
    props.onGeneratePDF(userDetails);
    setName("");
    setDescription("");
    setAge("");
    console.log("object created", userDetails);
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <FormInputElement
          label="Name"
          handleChangeFunction={handleNameChange}
          value={userName}
        />
        <FormInputElement
          label="Age"
          handleChangeFunction={hangdleAgeChange}
          value={userAge}
        />
        <FormInputElement
          label="Description"
          handleChangeFunction={handelDescriptionChange}
          value={userDescription}
        />
        <button type="submit">Generate PDF</button>
      </form>
    </div>
  );
};
export default FormCollection;
