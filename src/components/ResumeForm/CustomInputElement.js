import React from "react";
import customInputConfig from "./inputConfig";
const CustomInputField = (props) => {
  let tempValues = props.value;
  const handleCustomInputChange = (e, index, inputNo, label) => {
    tempValues[index][inputNo].val = e.target.value;
    props.changeFunction(tempValues);
  };
  const handleIncrementValues = () => {
    props.changeFunction([
      ...props.value,
      customInputConfig[props.label].map((element, index) => {
        return { label: element.label, val: undefined};
      }),
    ]);
  };

  return (
    <div className="input-field custom">
        <p className="input-label CustomHeading">{props.label}</p>
        {props.value.map((inputValue, index) => {
          return (
            <div key={index}>
              {customInputConfig[props.label].map((element, inputFieldNo) => {
                return (
                  <div key={index.toString() + "-" + inputFieldNo.toString()}>
                    <label className="input-small">{element.label}</label>
                    <input
                      className="input-element"
                      type={element.type}
                      value={props.value[index][inputFieldNo].value}
                      onChange={(e) =>
                        handleCustomInputChange(
                          e,
                          index,
                          inputFieldNo,
                          element.label
                        )
                      }
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
        <button
          type="button"
          className="increment-button"
          onClick={handleIncrementValues}
        >
          +
        </button>
    </div>
  );
};
export default CustomInputField;
