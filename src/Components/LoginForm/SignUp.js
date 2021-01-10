import React, { PureComponent } from 'react';
import Input from './Input';
import './LoginForm.scss';

import {
  FormValidator,
  getValidationState,
  validateCheckbox,
  validateEmail,
  validateName,
  validatePassword
} from './FormLogic';
import IsAuthorizedContext from '../isAuthorized/IsAuthorized';
import UserLoginService from '../../services/userLoginService';

class SignUpForm extends PureComponent {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
    formValid: false,
    errors: null
  }

  formValidator = new FormValidator({
    firstName: validateName,
    lastName: validateName,
    email: validateEmail,
    agree: validateCheckbox,
    password: validatePassword,
  });

  updateField = (fieldName, value) => {
    const stateValidation = this.formValidator.validate(fieldName, value, this.state.errors);
    this.setState(stateValidation);
    this.setState({ [fieldName]: value });
  }

  checkIsValidForm = () => {
    this.setState({
      errors:
      {
        firstName: validateName(this.state.firstName),
        lastName: validateName(this.state.lastName),
        email: validateEmail(this.state.email),
        agree: validateCheckbox(this.state.agree),
        password: validatePassword(this.state.password)
      }
    });
    console.log("err", this.state.errors);
    return !this.state.errors;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    UserLoginService.registerUser(this.state)
      .then((res) => {console.log("3",res);
        this.context.setAuthorized(true);
        UserLoginService.setSessionUserEmail(this.state.email);
        UserLoginService.login(this.state.email, this.state.password);
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ error: error });
        console.log("err", error)
      }
      )
  }

  render() {
    return (
      <form method="post"
        className="loginForm"
        onSubmit={this.handleSubmit}>
        <Input
          fieldName="firstName"
          label="First Name"
          value={this.state.firstName}
          onChange={this.updateField}
          type="text"
          validationError={validateName(this.state.firstName)}
          className="loginFormInput"
        />
        <Input
          fieldName="lastName"
          label="Last Name"
          value={this.state.lastName}
          onChange={this.updateField}
          type="text"
          validationError={validateName(this.state.lastName)}
          className="loginFormInput"
        />
        <Input
          fieldName="email"
          label="Email"
          value={this.state.email}
          onChange={this.updateField}
          type="text"
          validationError={validateEmail(this.state.email)}
          className="loginFormInput"
        />
        <Input
          fieldName="password"
          label="Password"
          value={this.state.password}
          onChange={this.updateField}
          type="password"
          validationError={validatePassword(this.state.password)}
          className="loginFormInput"
        />
        <Input
          fieldName="agree"
          label="Email preferences"
          value={this.state.agree}
          onChange={this.updateField}
          type="checkbox"
          validationError={validateCheckbox(this.state.agree)}
          className="loginFormInput"
        />
        <button
          className="button"
          type="submit" disabled={!this.checkIsValidForm}
        >
          Create account
        </button>
        {this.state.errors&&<p>this.state.errors</p>}
      </form>
    );
  }
};
SignUpForm.contextType = IsAuthorizedContext;
export default SignUpForm;