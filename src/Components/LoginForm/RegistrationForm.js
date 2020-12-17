import React, { PureComponent } from 'react';
import Input from './Input';
import './LoginForm.scss';

import { validateName, validateEmail, validateCheckbox, validatePassword } from './FormLogic';
import IsAuthorizedContext from '../isAuthorized/IsAuthorized';
import UserLoginService from '../../services/userLoginService';
import {
  createUserDataInJsonServer,
  deleteUserDataFromJsonServer,
  changeUserDataInJsonServer,
  getUserDataFromJsonServer
} from '../../services/UsersDataServiceWithJsonServer';


class RegistrationForm extends PureComponent {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
    phone: "",
    location:
    {
      country: "",
      state: "",
      city: "",
      street: ""
    },
    gender: "male",
    dateOfBirth: "",
    agree: false,
    formValid: false,
    isUserExist: false
  };

  componentDidMount() {
    let user = UserLoginService.getUserAuthorized();
    let email = user && user.email
    console.log("user1", user && user.email);
    if (email) {
      getUserDataFromJsonServer(email).then((res) => {
        console.log("userJson", res);
        this.setState(res);
        this.setState({ isUserExist: true });
        console.log("state", this.state)
      }).catch((err) => console.log(err));
    };

  }

  updateField = (fieldName, value) => {
    this.setState({ [fieldName]: value });
  }
  handleChangeSelect(event) {
    this.setState({ gender: event.target.value });
  }
  checkIsValidForm = () => {
    let errors = {};
    errors.firstName = validateName(this.state.firstName);
    errors.lastName = validateName(this.state.lastName);
    errors.email = validateEmail(this.state.email);
    console.log("err", this.state.errors);
    return !errors.firstName && !errors.lastName && !errors.email;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.isUserExist) {
      changeUserDataInJsonServer(this.state.id, this.state);
    } else {
      this.setState({ id: this.state.email });
      createUserDataInJsonServer(this.state);
    }
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
          isValid={validateName(this.state.firstName)}
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
          fieldName="photo"
          label="photo"
          value={this.state.picture}
          onChange={this.updateField}
          type="text"
          className="loginFormInput"
        />
        <label className="loginFormSelect">Gender
          <select value={this.state.gender} onChange={this.handleChangeSelect.bind(this)} className="">
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </label>
        <Input
          fieldName="dateOfBirth"
          label="dateOfBirth"
          value={this.state.dateOfBirth}
          onChange={this.updateField}
          type="text"
          className="loginFormInput"
        />
        <Input
          fieldName="email"
          label="Email"
          value={this.state.email}
          onChange={this.updateField}
          type="text"
          isValid={validateName(this.state.email)}
          className="loginFormInput"
        />
        <Input
          fieldName="phone"
          label="Phone"
          value={this.state.phone}
          onChange={this.updateField}
          type="text"
          className="loginFormInput"
        />
        <Input
          fieldName="country"
          label="Country"
          value={this.state.location.country}
          onChange={this.updateField}
          type="text"
          className="loginFormInput"
        />
        <Input
          fieldName="state"
          label="State"
          value={this.state.location.state}
          onChange={this.updateField}
          type="text"
          className="loginFormInput"
        />
        <Input
          fieldName="city"
          label="City"
          value={this.state.location.city}
          onChange={this.updateField}
          type="text"
          className="loginFormInput"
        />
        <Input
          fieldName="street"
          label="Street"
          value={this.state.location.street}
          onChange={this.updateField}
          type="text"
          className="loginFormInput"
        />
        <button
          className="button"
          type="submit" disabled={!this.checkIsValidForm}
        >
          Save
      </button>
      </form>
    );
  }
};
RegistrationForm.contextType = IsAuthorizedContext;
export default RegistrationForm;