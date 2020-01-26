import React from "react";

import "../MyInput/MyInput.css";

const MyInput = props => {
  let inputElement = null;

  const inputClasses = ["InputELement"];

  if (props.inValid && props.shouldValidate && props.touched) {
    inputClasses.push("Invalid");
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          onChange={props.changed}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          onChange={props.changed}
          value={props.value}
        >
          {props.elementConfig.options.map(oneOption => (
            <option key={oneOption.value} value={oneOption.value}>
              {oneOption.displayVal}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          onChange={props.changed}
          value={props.value}
        />
      );
  }
  return (
    <div className="MyInput">
      <label className="MyLabel">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default MyInput;
