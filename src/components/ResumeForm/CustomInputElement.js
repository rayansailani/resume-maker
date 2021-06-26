import React from "react";
import customInputConfig from "./inputConfig";
const CustomInputField = (props) => {
  let tempValues = props.value;
  const handleCustomInputChange = (e, index, inputNo, label) => {
    tempValues[index][inputNo].val = e.target.value;
    // debugger;
    props.changeFunction(tempValues);

  };
  const handleIncrementValues = () => {
    props.changeFunction([
      ...props.value,
      customInputConfig[props.label].map((element, index) => {
        return { label: element.label, val: undefined };
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
                  <label className="input-small" htmlFor={index.toString() + "-" + inputFieldNo.toString()}>{element.label}</label>
                  {element.type === "textArea" ? (
                    <textarea
                    value={props.value[index][inputFieldNo].val}
                    id= {index.toString() + "-" + inputFieldNo.toString()}
                      onInput={(e) =>
                        handleCustomInputChange(
                          e,
                          index,
                          inputFieldNo,
                          element.label
                        )
                      }
                    ></textarea>
                  ) : (
                    <input
                      className="input-element"
                      id={index.toString() + "-" + inputFieldNo.toString()}
                      type={element.type}
                      onInput={(e) =>
                        handleCustomInputChange(
                          e,
                          index,
                          inputFieldNo,
                          element.label
                        )
                      }
                      value={props.value[index][inputFieldNo].val}
                    />
                  )}
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
