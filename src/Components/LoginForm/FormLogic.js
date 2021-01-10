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

export function getValidationState(fieldName, value, stateErrors, validators) {//debugger;
    let stateValidation;
    const validate = (fieldName, value) => {
        return validators[fieldName]?.(value);
    }

    const validationError = validate(fieldName, value);

    if (validationError) {
        stateValidation = { errors: { ...stateErrors, [fieldName]: validationError } };
    } else {
        const prevValidationError = stateErrors?.[fieldName];
        if (prevValidationError) {
            if (Object.keys(stateErrors).length === 1) {
                stateValidation = { errors: null };
            } else {
                const { [fieldName]: remove, ...errors } = stateErrors
                stateValidation = { errors };
            }
        }
    }
    return stateValidation;
}

export const ValidateInput = (inputName, value) => {
    return validators[inputName] && validators[inputName](value);
}

export class FormValidator {
    constructor(validators) {
        this.validators = validators
    }

    validate(fieldName, value, stateErrors) {
        let stateValidation;
        const validate = (fieldName, value) => {
            return this.validators[fieldName](value);
        }

        const validationError = validate(fieldName, value);
        if (validationError) {
            stateValidation = { errors: { ...stateErrors, [fieldName]: validationError } };
        } else {
            const prevValidationError = stateErrors?.[fieldName];
            if (prevValidationError) {
                if (Object.keys(stateErrors).length === 1) {
                    stateValidation = { errors: null };
                } else {
                    const { [fieldName]: remove, ...errors } = stateErrors
                    stateValidation = { errors };
                }
            }
        }
        return stateValidation;
    }
}