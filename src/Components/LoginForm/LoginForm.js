import React, { PureComponent } from 'react';
import Input from './Input';
import './LoginForm.scss';

import { ValidateInput, PushError, PopError, HasErrors } from './FormLogic';
import IsAuthorizedContext from '../isAuthorized/IsAuthorized';
import UserLoginService from '../../services/userLoginService';

class LoginForm extends PureComponent {
  state = {
    email: "",
    password: "",
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
    UserLoginService.authorizeUser(this.state.email,this.state.password)
      .then((user) => {
        if (user) {
          this.context.setAuthorized(true);
          this.props.history.push('/');
        } else {
          // show error message
          alert("Incorrect email or password")
          console.log("auth failed");
        }
      })
  }

  render() {
    return (
      <form method="post"
        className="loginForm"
        onSubmit={this.handleSubmit} >
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
        <button
          className="button"
          type="submit"
        >
          Login
      </button>
      </form>
    );
  }
};
LoginForm.contextType = IsAuthorizedContext;
export default LoginForm;