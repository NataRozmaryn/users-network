import React, {PureComponent} from 'react';
import Input from './Input';
import './LoginForm.scss';

import { ValidateInput, PushError, PopError, HasErrors } from './FormLogic';

class LoginForm extends PureComponent {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
    formValid: false
  }  

  componentDidMount() {
    const ls = localStorage.getItem('loginForm');
    const user = ls ? JSON.parse(ls) : '';
    console.log("ls", user);
    
    if (user) { 
      this.setState(user);
    };
  }
  checkIsValidForm() {
    let valid = document.getElementsByClassName('loginForm_input__invalid').length === 0;
    console.log('valid', valid);
    if(this.state.formValid !== valid) {
      this.setState({formValid: valid});
    }
    console.log('disabled', !this.state.formValid);
  }

  validateField = (fieldName, value) => {        
    let res = ValidateInput(fieldName, value);
    
    if (res) {
      PushError(fieldName);
    } else {
      PopError(fieldName);
    }

    this.setState({formValid: !HasErrors()});
    
    return res;
  }

  updateField = (fieldName, value) => {
    this.setState({[fieldName]: value});    
  }

  handleSubmit = (e) => { console.log(this.state)
    localStorage.setItem('loginForm', JSON.stringify(this.state));
    e.preventDefault();
  }
  
  render() {    
  return (    
    <form className="loginForm" onSubmit={this.handleSubmit} >
      <Input 
        fieldName="firstName"
        label="First Name"
        value={this.state.firstName}
        onChange={this.updateField}
        type="text"
        onValidate={this.validateField}
        className="loginForm_input"
      />
      <Input 
        fieldName="lastName"
        label="Last Name"
        value={this.state.lastName}
        onChange={this.updateField}
        type="text"
        onValidate={this.validateField}
        className="loginForm_input"
      />
      <Input 
        fieldName="email"
        label="Email"
        value={this.state.email}
        onChange={this.updateField}
        type="text"
        onValidate={this.validateField}
        className="loginForm_input"
      />
      <Input 
        fieldName="password"
        label="Password"
        value={this.state.password}
        onChange={this.updateField}
        type="password"
        onValidate={this.validateField}
        className="loginForm_input"
      />
      <Input 
        fieldName="agree"
        label="Email preferences"
        value={this.state.agree}
        onChange={this.updateField}
        type="checkbox"
        onValidate={this.validateField}
        className="loginForm_input"
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

export default LoginForm;