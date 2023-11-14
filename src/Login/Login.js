import React from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub } from "react-icons/fa6";

const Login = () => {
  return (

    <Form className='login'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="your email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Your Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Form.Text className="ms-3">
        Error
      </Form.Text>
      <p>don't have an account <Link to='/register'>please register here</Link></p>
      <ButtonGroup vertical>
      <Button variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
      <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
      </ButtonGroup>
    </Form>
    
  );
};

export default Login;