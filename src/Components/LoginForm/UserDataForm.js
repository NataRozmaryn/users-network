import React, { PureComponent } from 'react';
import Input from './Input';
import './LoginForm.scss';

import { validateName, validateEmail, getValidationState } from './FormLogic';
import IsAuthorizedContext from '../isAuthorized/IsAuthorized';
import UserLoginService from '../../services/userLoginService';

class UserDataForm extends PureComponent {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    street: "",
    gender: "male",
    dateOfBirth: "",
    agree: false,
    formValid: false,
    errors: null
  };

  componentDidMount() {
    let user = UserLoginService.getUserAuthorized();
    const getUserIdFromLocalStorage = localStorage.getItem("userId");
    let email = (user && user.email) || getUserIdFromLocalStorage;
    console.log("user1", email);
    if (email) {
      UserLoginService.getUserData(email).then((res) => {
        console.log("userJson", res[0].id);
        this.setState({
          id: res[0].id || "",
          firstName: res[0].firstName || "",
          lastName: res[0].lastName || "",
          email: res[0].email || "",
          picture: res[0].picture || "",
          phone: res[0].phone || "",
          country: res[0].country || "",
          state: res[0].state || "",
          city: res[0].city || "",
          street: res[0].street || "",
          gender: res[0].gender || "male",
          dateOfBirth: res[0].dateOfBirth || "",
          agree: res[0].agree || false,
        });
        this.setState({ isUserExist: true });
        console.log("state", this.state)
      })
        .catch((err) => console.log("err", err));
    };
  }

  updateField = (fieldName, value) => {
    const stateValidation = getValidationState(fieldName, value, this.state.errors, {
      firstName: validateName,
      lastName: validateName,
      email: validateEmail
    });
    this.setState(stateValidation);
    this.setState({ [fieldName]: value });
  }
  handleChangeSelect(event) {
    this.setState({ gender: event.target.value });
  }

  checkIsValidForm = () => {
    this.setState({
      errors:
      {
        firstName: validateName(this.state.firstName),
        lastName: validateName(this.state.lastName),
        email: validateEmail(this.state.email)
      }
    });
    console.log("err", this.state.errors);
    return !this.state.errors;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.isUserExist) {
      UserLoginService.updateUserAccount(this.state.id, this.state);
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
          validationError={this.state.errors?.firstName}
          className="loginFormInput"
        />
        <Input
          fieldName="lastName"
          label="Last Name"
          value={this.state.lastName}
          onChange={this.updateField}
          type="text"
          validationError={this.state.errors?.lastName}
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
          validationError={this.state.errors?.email}
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
          value={this.state.country}
          onChange={this.updateField}
          type="text"
          className="loginFormInput"
        />
        <Input
          fieldName="state"
          label="State"
          value={this.state.state}
          onChange={this.updateField}
          type="text"
          className="loginFormInput"
        />
        <Input
          fieldName="city"
          label="City"
          value={this.state.city}
          onChange={this.updateField}
          type="text"
          className="loginFormInput"
        />
        <Input
          fieldName="street"
          label="Street"
          value={this.state.street}
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
UserDataForm.contextType = IsAuthorizedContext;
export default UserDataForm;