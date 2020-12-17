import React, { useState } from 'react';
import { prepareElementClassName } from './utilsClassMerge';

const Input = ({ fieldName, label, value, onChange, type = "text", isValid = "", className }) => {
  const [isModified, SetModified] = useState(false);

  const onInputChange = (fieldName, value) => {
    onChange(fieldName, value);
    SetModified(true);
  }

  return (
    <div
      className={prepareElementClassName(className, "input-with-error_container", isModified && !isValid ? "invalid" : "valid")}>
      <div className={prepareElementClassName(className, "input_container")}>
        <label className={prepareElementClassName(className, "label")}>{label}</label>
        <input
          className={prepareElementClassName(className, isModified && !isValid ? "invalid" : "valid")}
          name={fieldName}
          type={type}
          checked={value}
          value={value}
          onChange={(e) => onInputChange(fieldName, type === "checkbox" ? e.target.checked : e.target.value)}
        />
      </div>
      {isModified && isValid && <div className={prepareElementClassName(className, "invalid_label")}>{isValid}</div>}
    </div>
  );
};

export default Input;