import React, { useState } from 'react';
import './LoginForm.css';
// import {Link} from 'reactrouter-dom';
import './LoginFormValidation';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function LoginForm () {
  const [valueText, setValueText]= useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const handleInput = (e) =>{
    const { name, value } = e.target;
    console.log(name)
    setValueText({...valueText, [name]: value});
    // setValueText(prev =>({...prev, [e.target.name]: [e.target.value]}))
  }

  const handleSubmit =(event) =>{
    console.log(valueText);
    event.preventDefault();
    // setErrors(validation(values));
  }

  return (
    <div className='wrapper'><form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FaUser /></InputGroup.Text>
        <Form.Control
          aria-label="Username"
          aria-describedby="basic-addon1"
          type="text" name="username" placeholder='Username' required onChange={(e)=>handleInput(e)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><RiLockPasswordFill /></InputGroup.Text>
        <Form.Control
          aria-label="Password"
          aria-describedby="basic-addon1"
          type="password" name="password" placeholder='Password' required onChange={(e)=>handleInput(e)}
        />
      </InputGroup>

        {/* <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password</a>
        </div> */}
        <button type="submit">Login</button>
        {/*<Link to="/SignupForm" className="signup-link"><p>Dont have an account? <a href="#">Signin</a></p></Link> */}
        </form></div>
  );
};

export default LoginForm;