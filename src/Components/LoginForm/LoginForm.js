import React, { PureComponent } from 'react';
import Input from './Input';
import './LoginForm.scss';

import IsAuthorizedContext from '../isAuthorized/IsAuthorized';
import UserLoginService from '../../services/userLoginService';

class LoginForm extends PureComponent {
  state = {
    email: "",
    password: ""
  }

  updateField = (fieldName, value) => {
    this.setState({ [fieldName]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    UserLoginService.login(this.state.email, this.state.password)
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
          className="loginFormInput"
        />
        <Input
          fieldName="password"
          label="Password"
          value={this.state.password}
          onChange={this.updateField}
          type="password"
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