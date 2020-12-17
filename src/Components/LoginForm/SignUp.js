import React, { PureComponent } from 'react';
import Input from './Input';
import './LoginForm.scss';

import { validateName, validateEmail, validateCheckbox, validatePassword} from './FormLogic';
import IsAuthorizedContext from '../isAuthorized/IsAuthorized';
import UserLoginService from '../../services/userLoginService';

class SignUpForm extends PureComponent {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false
  }

  updateField = (fieldName, value) => {
    this.setState({ [fieldName]: value });
  }

  checkIsValidForm = () => {
    let errors = {};
    errors.firstName = validateName(this.state.firstName);
    errors.lastName = validateName(this.state.lastName);
    errors.email = validateEmail(this.state.email);
    errors.agree = validateCheckbox(this.state.agree);
    errors.password = validatePassword(this.state.password);
    console.log("err", this.state.errors);
    return !errors.firstName && !errors.lastName && !errors.email && !errors.agree && !errors.password;
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
          isValid = {validateName(this.state.firstName)}
          className="loginFormInput"
        />
        <Input
          fieldName="lastName"
          label="Last Name"
          value={this.state.lastName}
          onChange={this.updateField}
          type="text"
          isValid={validateName(this.state.lastName)}
          className="loginFormInput"
        />
        <Input
          fieldName="email"
          label="Email"
          value={this.state.email}
          onChange={this.updateField}
          type="text"
          isValid={validateEmail(this.state.email)}
          className="loginFormInput"
        />
        <Input
          fieldName="password"
          label="Password"
          value={this.state.password}
          onChange={this.updateField}
          type="password"
          isValid={validatePassword(this.state.password)}
          className="loginFormInput"
        />
        <Input
          fieldName="agree"
          label="Email preferences"
          value={this.state.agree}
          onChange={this.updateField}
          type="checkbox"
          isValid={validateCheckbox(this.state.agree)}
          className="loginFormInput"
        />
        <button
          className="button"
          type="submit" disabled={!this.checkIsValidForm()}
        >
          Create account
      </button>
      </form>
    );
  }
};
SignUpForm.contextType = IsAuthorizedContext;
export default SignUpForm;