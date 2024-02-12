import React, { useState } from 'react';
// import './Signup.css';
 import './SignupFormValidation';
 import { FaUser } from "react-icons/fa";
 import { RiLockPasswordFill } from "react-icons/ri";
 import { MdEmail } from "react-icons/md";
 import { BsPersonWorkspace } from "react-icons/bs";
 import Form from 'react-bootstrap/Form';
 import InputGroup from 'react-bootstrap/InputGroup';
 


function SignupForm () {
  const [valueText, setValueText]= useState({
    username: '',
    password: '',
    fullname: '',
    email: '',
    designation: ''
  })
  const [errors, setErrors] = useState({})
  const handleInput = (e) =>{
    const { name, value } = e.target;
    // console.log(name)
    setValueText({...valueText, [name]: value});
  }

  const handleSubmit =(event) =>{
    console.log(valueText);
    event.preventDefault();
    // setErrors(validation(values));
  }

  return (
    <div className='wrapper'>
        <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FaUser /></InputGroup.Text>
        <Form.Control
          aria-label="Username"
          aria-describedby="basic-addon1"
          type="text" name="username" placeholder='Username' required onChange={(e)=>handleInput(e)}
        />
        <InputGroup.Text id="basic-addon1"><RiLockPasswordFill /></InputGroup.Text>
        <Form.Control
          aria-label="Password"
          aria-describedby="basic-addon1"
          type="password" name="password" placeholder='Password'required onChange={(e)=>handleInput(e)}
        />
      </InputGroup>
      
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FaUser /></InputGroup.Text>
        <Form.Control
          aria-label="Fullname"
          aria-describedby="basic-addon1"
          type="text" name="fullname" placeholder='Full Name' required onChange={(e)=>handleInput(e)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><MdEmail /></InputGroup.Text>
        <Form.Control
          aria-label="Email"
          aria-describedby="basic-addon1"
          type="text" name="email" placeholder='Email' onChange={(e)=>handleInput(e)}
        />
        <InputGroup.Text id="basic-addon1"><BsPersonWorkspace /></InputGroup.Text>
        <Form.Control
          aria-label="Designation"
          aria-describedby="basic-addon1"
          type="text" name="username" placeholder='Designation' onChange={(e)=>handleInput(e)}
        />
      </InputGroup>
      
        
        <button type="submit">Signup</button>
        
        </form>
    </div>
  );
};

export default SignupForm;