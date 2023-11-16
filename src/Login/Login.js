import React, { useContext } from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub } from "react-icons/fa6";
import { AuthContext } from '../context/AuthContext/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const {signIn,googleProviderLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'

  const handleSubmit = (e) => {
          e.preventDefault();
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
          signIn(email,password)
          .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            if(user) {
              navigate(from,{replace:true})
            }
          })
          .catch(error => console.error(error))
  }

  const handleGoogleSignin = () => {
          googleProviderLogin(googleProvider)
          .then( result => {
            const user = result.user;
            console.log(user)
          })
          .catch(error => console.error(error))
  }

  return (

    <Form onSubmit={handleSubmit} className='login'>
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
      <Button onClick={handleGoogleSignin}  variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
      <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
      </ButtonGroup>
    </Form>
    
  );
};

export default Login;