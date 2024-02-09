import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: 'Om_007',
    password: 'pass@123',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your signup logic here, e.g., send data to the server
    console.log('Signup submitted:', formData);
    // Reset the form after submission
    setFormData({
      username: '',
      password: '',
    });
  };

  const formStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '50%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div>
      <h2 className='text-center my-5'>Login</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            style={inputStyle}
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            style={inputStyle}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button style={buttonStyle} type="submit">
          Login
        </button>
        <button style={buttonStyle} type="submit">
          Register
        </button>
        <br />
        <a href="/">Forget password</a>
      </form>
    </div>
  );
};

export default Login;
