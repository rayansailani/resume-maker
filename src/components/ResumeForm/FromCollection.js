import React from "react";
import { useState } from "react";
import FormInputElement from "./FormInputElement";
import "./FormCollection.css";
import CustomInputField from "./CustomInputElement";
import customInputConfig from "./inputConfig";
const FormCollection = (props) => {
  const [userName, setName] = useState("");
  const [userDescription, setDescription] = useState("");
  const [userEducation, setUserEducation] = useState([
    customInputConfig["Education"].map((element) => {
      return { label: element.label, val: undefined };
    }),
  ]);
  const [userSkills, setUserSkills] = useState("");
  const [userExperience, setUserExperience] = useState([
    customInputConfig["Experience"].map((element, index) => {
      return { label: element.label, val: undefined };
    }),
  ]);
  const [userProjects, setUserProjects] = useState([
    customInputConfig["Project"].map((element, index) => {
      return { label: element.label, val: undefined };
    }),
  ]);
  const [userCourses, setUserCourses] = useState("");
  let userDetails = {};

  const handleNameChange = (name) => {
    setName(name);
  };
  const handelDescriptionChange = (desc) => {
    setDescription(desc);
  };
  const handleEducationChange = (education) => {
    setUserEducation(education);
  };
  const handleExperienceChange = (exp) => {
    setUserExperience(exp);
  };
  const handleUserProjects = (projs) => {
    setUserProjects(projs);
  };
  const handleUserCourses = (courses) => {
    setUserCourses(courses);
  };
  const handleUserSkills = (skills) => {
    setUserSkills(skills);
  };
  const InputFields = [
    {
      label: "Name",
      value: userName,
      type: "text",
      ClassName: "name",
      change: handleNameChange,
    },
    {
      label: "Career Objective",
      value: userDescription,
      type: "textArea",
      ClassName: "obj",
      change: handelDescriptionChange,
    },
    {
      label: "Education",
      value: userEducation,
      type: "Custom",
      ClassName: "education",
      change: handleEducationChange,
    },
    {
      label: "Skills",
      value: userSkills,
      type: "textArea",
      ClassName: "skills",
      change: handleUserSkills,
    },
    {
      label: "Project",
      value: userProjects,
      type: "Custom",
      ClassName: "projects",
      change: handleUserProjects,
    },
    {
      label: "Experience",
      value: userExperience,
      type: "Custom",
      ClassName: "exp",
      change: handleExperienceChange,
    },
    {
      label: "Courses",
      value: userCourses,
      type: "textArea",
      ClassName: "courses",
      change: handleUserCourses,
    },
  ];
  const handleSubmitForm = (event) => {
    event.preventDefault();
    userDetails = {
      ...userDetails,
      name: userName,
      desc: userDescription,
      skills: userSkills,
      courses: userCourses,
      education: userEducation,
      exp: userExperience,
      projects: userProjects,
    };
    props.onGeneratePDF(userDetails);
    setName("");
    setDescription("");
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
        {InputFields.map((ip) => {
          return ip.type === "Custom" ? (
            <CustomInputField
              key={ip.label}
              label={ip.label}
              changeFunction={ip.change}
              value={ip.value}
            />
          ) : (
            <FormInputElement
              key={ip.label}
              label={ip.label}
              handleChangeFunction={ip.change}
              value={ip.value}
              type={ip.type}
              ClassName={ip.ClassName}
            />
          );
        })}
        <div className="grid-center">
          <button
            type="submit"
            style={{
              textDecoration: "none",
              color: "#4a4a4a",
              backgroundColor: "white",
              fontSize: "0.8rem",
              borderRadius: "6px",
              border: "none",
              padding: "8px",
              margin: "12px",
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            Generate PDF
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormCollection;
