import React, { PureComponent } from 'react';
import Input from './Input';
import './LoginForm.scss';

import { ValidateInput, PushError, PopError, HasErrors } from './FormLogic';
import IsAuthorizedContext from '../isAuthorized/IsAuthorized';
import UserLoginService from '../../services/userLoginService';

class RegistrationForm extends PureComponent {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    url: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    street: "",
    gender: "male",
    dateOfBirth: "",
    agree: false,
    formValid: false
  }

  componentDidMount() {
    // UserLoginService.getUserAutorized().then((user) => {
    //     console.log("user", user);
    //     if (user) {
    //       this.setState(user);
    //     };
    // });
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
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    UserLoginService.createUserAccount(this.state)
      .then(() => {
        this.context.setAuthorized(true);
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
          fieldName="photo"
          label="photo"
          value={this.state.photo}
          onChange={this.updateField}
          type="text"
          onValidate={this.validateField}
          className="loginFormInput"
        />
        <label className="loginFormSelect">Gender
            <select value={this.state.gender} onChange={this.handleChange} className="">
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
        </label>
        <Input
          fieldName="dateOfBirth"
          label="dateOfBirth"
          value={this.state.url}
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
          fieldName="phone"
          label="Phone"
          value={this.state.phone}
          onChange={this.updateField}
          type="text"
          onValidate={this.validateField}
          className="loginFormInput"
        />
        <Input
          fieldName="country"
          label="Country"
          value={this.state.country}
          onChange={this.updateField}
          type="text"
          onValidate={this.validateField}
          className="loginFormInput"
        />
        <Input
          fieldName="state"
          label="State"
          value={this.state.state}
          onChange={this.updateField}
          type="text"
          onValidate={this.validateField}
          className="loginFormInput"
        />
        <Input
          fieldName="city"
          label="City"
          value={this.state.state}
          onChange={this.updateField}
          type="text"
          onValidate={this.validateField}
          className="loginFormInput"
        />
        <Input
          fieldName="street"
          label="Street"
          value={this.state.state}
          onChange={this.updateField}
          type="text"
          onValidate={this.validateField}
          className="loginFormInput"
        />
        <button
          className="button"
          type="submit" disabled={!this.state.formValid}
        >
          Save
      </button>
      </form>
    );
  }
};
RegistrationForm.contextType = IsAuthorizedContext;
export default RegistrationForm;