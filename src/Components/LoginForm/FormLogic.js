const validators = {
    firstName: (value) => (!value && 'must be filled') || (value.length < 3 && 'at least 3 characters'),
    lastName: (value) => (!value && 'must be filled') || (value.length < 3 && 'at least 3 characters'),
    email: (value) => (!value && 'must be filled') || 
        (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && 'invalid email'),
    agree: (value) => !value && 'must be checked',
    password: (value) => (!value && 'must be filled') || (value.length >= 6 ? '' : 'to short password')
}

let errors = [];

export const HasErrors = () => {        
    return errors.length > 0;
}

export const PushError = (inputName) => {        
    if (errors.indexOf(inputName) === -1) {
        errors.push(inputName);        
    }
}

export const PopError = (inputName) => {
    let errIdx = errors.indexOf(inputName);
    if (errIdx !== -1) {
      errors.splice(errIdx, 1);      
    }
}

export const ValidateInput = (inputName, value) => {
    return validators[inputName] && validators[inputName](value);
}
export const prepareElementClassName = (blockClassName, elementName, modifier) => !elementName 
    ? "" : addModifierClassName(`${blockClassName}__${elementName}`, modifier);
  
export const mergeClassName = (componentClassName, ...propsClassName) => !propsClassName 
    ? componentClassName : "_";  
  
export const addModifierClassName = (componentClassName, modifier) => !modifier 
    ? componentClassName : `${componentClassName} ${componentClassName}--${modifier}`
  