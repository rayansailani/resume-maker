import React , {useState} from "react";

const CustomInputField = (props) => {
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
  const [values,setValues] = useState([customInputConfig[props.label].map((element, index)=>{
    return {label:element.label, val:null};
  })]);
  let tempValues = values;
  console.log("values",values);
  
  const handleCustomInputChange = (e, index, inputNo, label) =>{
    // console.log(index, inputNo, label)
    tempValues[index][inputNo].val = e.target.value;
    setValues(tempValues);
    console.log(values);
  }
  const handleIncrementValues = () =>{  
    setValues((prevState)=>{
      return [...prevState, customInputConfig[props.label].map((element, index)=>{
        return {label:element.label, val:null};
      })]
    });
  }
  
  return (
    <div>
      <form>
    {values.map((value, index)=>{
      return (
        <div key={index}>
          {
            customInputConfig[props.label].map((element, inputFieldNo)=>{
              return (
                <div key={index.toString()+"-"+inputFieldNo.toString()}>
                <label>{element.label}</label>
                <input type={element.type} onChange={(e)=>handleCustomInputChange(e, index, inputFieldNo, element.label)}/>
                </div>
                
              )
              
            })
          }
        </div>
      )
    })}
    <button type="button" onClick={handleIncrementValues}>+</button>
    </form>
    </div>
  );
  
  
};
export default CustomInputField;