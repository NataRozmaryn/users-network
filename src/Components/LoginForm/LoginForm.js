import React, { PureComponent } from 'react';
import Input from './Input';
import './LoginForm.scss';

import IsAuthorizedContext from '../isAuthorized/IsAuthorized';
import UserLoginService from '../../services/userLoginService';

class LoginForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.passwordRef = React.createRef();
    this.emailRef = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value
    });
    UserLoginService.login(this.state.email, this.state.password)
      .then((user) => {
        if (user) {
          this.context.setAuthorized(true);
          UserLoginService.setSessionUserEmail(this.state.email);
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
        <label>Email
          <input
            type="text"
            className="loginFormInput"
            required={true}
            pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"}
            title={"Invalid email address"}
            placeholder="email"
            ref={this.emailRef}
          />
        </label>
        <label>Password
          <input
            type="password"
            className="loginFormInput"
            required={true}
            minLength={6}
            placeholder="password"
            ref={this.passwordRef}
          />
        </label>
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


// class LoginForm extends PureComponent {
//   state = {
//     email: "",
//     password: ""
//   }

//   updateField = (fieldName, value) => {
//     this.setState({ [fieldName]: value });
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     UserLoginService.login(this.state.email, this.state.password)
//       .then((user) => {
//         if (user) {
//           this.context.setAuthorized(true);
//           UserLoginService.setSessionUserEmail(this.state.email);
//           this.props.history.push('/');
//         } else {
//           // show error message
//           alert("Incorrect email or password")
//           console.log("auth failed");
//         }
//       })
//   }

//   render() {
//     return (
//       <form method="post"
//         className="loginForm"
//         onSubmit={this.handleSubmit} >
//         <Input
//           fieldName="email"
//           label="Email"
//           value={this.state.email}
//           onChange={this.updateField}
//           type="text"
//           className="loginFormInput"
//         />
//         <Input
//           fieldName="password"
//           label="Password"
//           value={this.state.password}
//           onChange={this.updateField}
//           type="password"
//           className="loginFormInput"
//         />
//         <button
//           className="button"
//           type="submit"
//         >
//           Login
//       </button>
//       </form>
//     );
//   }
// };
// LoginForm.contextType = IsAuthorizedContext;
// export default LoginForm;