import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const RegistrationContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const RegistrationHeader = styled.h2`
  text-align: center;
  color: #333333;
`;

const RegistrationFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const RegistrationButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'om',
      lastName: 'kumawat',
      contactNo: '7768928706',
      email: 'omkumawa6473@gmail.com',
      password: 'pass@123',
      confirmPassword: 'pass@123',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // You can add your registration logic here, e.g., send data to the server
    console.log('Registration submitted:', this.state);
    // Reset the form after submission
    this.setState({
      firstName: '',
      lastName: '',
      contactNo: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    
  };

  render() {
    return (
      <RegistrationContainer>
        <RegistrationHeader>Registration</RegistrationHeader>
        <RegistrationFormWrapper onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>First Name:</Label>
            <FormInput
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Last Name:</Label>
            <FormInput
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Contact Number:</Label>
            <FormInput
              type="text"
              name="contactNo"
              value={this.state.contactNo}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Email:</Label>
            <FormInput
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Password:</Label>
            <FormInput
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Confirm Password:</Label>
            <FormInput
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <RegistrationButton type="submit">Register</RegistrationButton>
          
          <Link to="/Login" classaName="btn btn-default border w-100 bg-light" >login</Link>
            
        </RegistrationFormWrapper>
      </RegistrationContainer>
    );
  }
}

export default RegistrationForm;
