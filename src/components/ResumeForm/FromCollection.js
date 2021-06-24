import React from "react";
import { useState } from "react";
import FormInputElement from "./FormInputElement";
import "./FormCollection.css"
const FormCollection = (props) => {
  const [userName, setName] = useState("");
  const [userAge, setAge] = useState("");
  const [userDescription, setDescription] = useState("");
  const [userEducation, setUserEducation] = useState([]);
  const [userSkills, setUserSkills] = useState([]);
  const [userExperience, setUserExperience] = useState([]);
  const [userProjects, setUserProjects] = useState([]);
  const [userCourses, setUserCourses] = useState("");

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
  const handleEducationChange = (education) =>{
    console.log(education);
    setUserEducation(education);
  }
  const handleExperienceChange = (exp) =>{
    setUserExperience(exp);
  }
  const handleUserProjects = (projs) =>{
    setUserProjects(projs);
  }
  const handleUserCourses = (courses) =>{
    setUserCourses(courses);
  }
  const handleUserSkills = (skills) =>{
    setUserSkills(skills);
  }
  
  const InputFields = [
    {label:"Name", value:userName, type:"text", ClassName:"name", change:handleNameChange},
    {label:"Age", value:userAge ,type:"number", ClassName:"age", change:hangdleAgeChange},
    {label:"Career Objective", value:userDescription, type:"textArea", ClassName:"obj", change:handelDescriptionChange},
    {label:"Education", value:userEducation, type:"Custom", ClassName:"education", change:handleEducationChange},
    {label:"Skills", value:userSkills, type:"textArea", ClassName:"skills",change:handleUserSkills},
    {label:"Project", value:userProjects, type:"Custom", ClassName:"projects", change:handleUserProjects},
    {label:"Experience", value:userExperience, type:"Custom", ClassName:"exp", change:handleExperienceChange},
    {label:"Courses", value:userCourses, type:"textArea", ClassName:"courses", change:handleUserCourses}
  ];
  const handleSubmitForm = (event) => {
    event.preventDefault();
    userDetails = {
      ...userDetails,
      name: userName,
      age: userAge,
      desc: userDescription,
      skills:userSkills,
      courses:userCourses,
      education:userEducation,
      exp:userExperience,
      projects:userProjects
    };
    console.log(userDetails);
    props.onGeneratePDF(userDetails);
    setName("");
    setDescription("");
    setAge("");
    setUserSkills("");
    setUserCourses("");
    setUserEducation([]);
    setUserExperience([]);
    setUserProjects([]);
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <h2 className="heading">Resume Form</h2>
        <hr className="rule"></hr>
        {
          InputFields.map((ip) =>{
              return <FormInputElement
              key={ip.label}
              label={ip.label}
              handleChangeFunction={ip.change}
              value={ip.value}
              type={ip.type}
              ClassName={ip.ClassName}
            />
          })
        }
        <div className="grid-center">
        <button type="submit" style={{
            textDecoration: "none",
            color: "#4a4a4a",
            backgroundColor: "white",
            fontSize:"0.8rem",
            borderRadius:"6px",
            border:"none",
            padding:"8px",
            margin:'12px',
            fontFamily:"'Open Sans', sans-serif"
          }}>Generate PDF</button>
          </div>
      </form>
    </div>
  );
};
export default FormCollection;