import React, { useState } from 'react';
import { prepareElementClassName } from './utilsClassMerge';

const Input = ({ fieldName, label, value, onChange, type = "text", validationError = "", className }) => {
  const [isModified, setModified] = useState(false);

  const onInputChange = (fieldName, value) => {
    onChange(fieldName, value);
    setModified(true);
  }

  return (
    <div
      className={prepareElementClassName(className, "input-with-error_container", isModified && validationError ? "invalid" : "valid")}>
      <div className={prepareElementClassName(className, "input_container")}>
        <label className={prepareElementClassName(className, "label")}>{label}</label>
        <input
          className={prepareElementClassName(className, isModified && validationError ? "invalid" : "valid")}
          name={fieldName}
          type={type}
          checked={value}
          value={value}
          onChange={(e) => onInputChange(fieldName, type === "checkbox" ? e.target.checked : e.target.value)}
        />
      </div>
      {isModified && validationError && <div className={prepareElementClassName(className, "invalid_label")}>{validationError}</div>}
    </div>
  );
};

export default Input;