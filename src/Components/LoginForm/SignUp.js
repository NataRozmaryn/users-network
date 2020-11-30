import React, { PureComponent } from 'react';
import Input from './Input';
import './LoginForm.scss';

import { ValidateInput, PushError, PopError, HasErrors } from './FormLogic';
import IsAuthorizedContext from '../isAuthorized/IsAuthorized';
import UserLoginService from '../../services/userLoginService';

class SignUpForm extends PureComponent {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
    formValid: false
  }

  componentDidMount() {
    // const user = UserLoginService.getUserAutorized('loginForm');

    // if (user) {
    //   this.setState(user);
    // };
  }

  validateField = (fieldName, value) => {
    let res = ValidateInput(fieldName, value);

    if (res) {
      PushError(fieldName);
    } else {
      PopError(fieldName);
    }

    this.setState({ formValid: !HasErrors() });

    return res;
  }

  updateField = (fieldName, value) => {
    this.setState({ [fieldName]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    UserLoginService.createUserAccount(this.state.email, this.state)
      .then(() => {
        this.context.setAuthorized(true);
        UserLoginService.authorizeUser(this.state.email, this.state.password);
        this.props.history.push('/');
      })
  }

  render() {
    return (
      <form method="post"
        className="loginForm"
        onSubmit={this.handleSubmit} >
        <Input
          fieldName="firstName"
          label="First Name"
          value={this.state.firstName}
          onChange={this.updateField}
          type="text"
          onValidate={this.validateField}
          className="loginFormInput"
        />
        <Input
          fieldName="lastName"
          label="Last Name"
          value={this.state.lastName}
          onChange={this.updateField}
          type="text"
          onValidate={this.validateField}
          className="loginFormInput"
        />
        <Input
          fieldName="email"
          label="Email"
          value={this.state.email}
          onChange={this.updateField}
          type="text"
          onValidate={this.validateField}
          className="loginFormInput"
        />
        <Input
          fieldName="password"
          label="Password"
          value={this.state.password}
          onChange={this.updateField}
          type="password"
          onValidate={this.validateField}
          className="loginFormInput"
        />
        <Input
          fieldName="agree"
          label="Email preferences"
          value={this.state.agree}
          onChange={this.updateField}
          type="checkbox"
          onValidate={this.validateField}
          className="loginFormInput"
        />
        <button
          className="button"
          type="submit" disabled={!this.state.formValid}
        >
          Create account
      </button>
      </form>
    );
  }
};
SignUpForm.contextType = IsAuthorizedContext;
export default SignUpForm;