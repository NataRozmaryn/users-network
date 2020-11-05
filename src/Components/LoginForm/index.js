import React, { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('test.user@gmail.com');
  const [password, setPassword] = useState('1234567');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ email, password });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label className="label-wrapper">
        <span className="label">Email</span>
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="label-wrapper">
        <span className="label">Password</span>
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button 
        className="button" 
        onClick={handleSubmit}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;