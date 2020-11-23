import React, { useState, useEffect } from 'react';
import { prepareElementClassName } from './utilsClassMerge';

const Input = ({ fieldName, label, value, onChange, type = "text", onValidate, className }) => {
  const [isInvalid, SetInvalid] = useState(false);
  const [isModified, SetModified] = useState(false);

  const onInputChange = (fieldName, value) => {
    onChange(fieldName, value);
    SetModified(true);
  }

  useEffect(() => {
    const isInvalid = onValidate(fieldName, value);
    SetInvalid(isInvalid);
  }, [onValidate, fieldName, value]);

  return (
    <div
      className={prepareElementClassName(className, "input-with-error_container", isModified && isInvalid ? "invalid" : "valid")}>
      <div className={prepareElementClassName(className, "input_container")}>
        <label className={prepareElementClassName(className, "label")}>{label}</label>
        <input
          className={prepareElementClassName(className, isModified && isInvalid ? "invalid" : "valid")}
          name={fieldName}
          type={type}
          checked={value}
          value={value}
          onChange={(e) => onInputChange(fieldName, type === "checkbox" ? e.target.checked : e.target.value)}
        />
      </div>
      {isModified && isInvalid && <div className={prepareElementClassName(className, "invalid_label")}>{isInvalid}</div>}
    </div>
  );
};

export default Input;