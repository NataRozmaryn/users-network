const validators = {
    firstName: (value) => (!value && 'must be filled') || (value.length < 3 && 'at least 3 characters'),
    lastName: (value) => (!value && 'must be filled') || (value.length < 3 && 'at least 3 characters'),
    email: (value) => (!value && 'must be filled') || 
        (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && 'invalid email'),
    agree: (value) => !value && 'must be checked',
    password: (value) => (!value && 'must be filled') || (value.length >= 6 ? '' : 'to short password')
}
let error = {
    firstName: (value) => validateEmptyValue(value) || validateStrLength(value,3),
    lastName: (value) => validateEmptyValue(value) || validateStrLength(value,3),
    email: (value) => validateEmptyValue(value) || validateEmail(value),
    agree: (value) => validateEmptyValue(value),
    password: (value) => validateEmptyValue(value) || validateStrLength(value, 6)
}

const validateEmptyValue = (value) => !value;

const validateStrLength = (value, length) => value.length < length;

const validateEmail = (value) => !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

let errors = [];
const isValidForm = (error) => errors.filter((item, index) => item[index]).length === 0;


