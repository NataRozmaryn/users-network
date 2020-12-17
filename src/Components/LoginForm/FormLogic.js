const validators = {
    firstName: (value) => (!value && 'must be filled') || (value.length < 3 && 'at least 3 characters'),
    lastName: (value) => (!value && 'must be filled') || (value.length < 3 && 'at least 3 characters'),
    email: (value) => (!value && 'must be filled') || 
        (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && 'invalid email'),
    agree: (value) => !value && 'must be checked',
    password: (value) => (!value && 'must be filled') || (value.length >= 6 ? '' : 'to short password')
}

export const validateName = (value) => (!value && 'must be filled') || (value.length < 3 && 'at least 3 characters');
export const validateEmail = (value) => (!value && 'must be filled') || (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && 'invalid email');
export const validateCheckbox = (value) => !value && 'must be checked';
export const validatePassword = (value) => (!value && 'must be filled') || (value.length >= 6 ? '' : 'to short password');

export const ValidateInput = (inputName, value) => {
    return validators[inputName] && validators[inputName](value);
}