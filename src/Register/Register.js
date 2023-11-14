import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext/AuthProvider';






const Register = () => {
  const {creatUser,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/login'

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,photoURL,password)
  
      creatUser(email,password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset()
        handleUpdateUserProfile(name,photoURL);
        if(user) {
          navigate(from, {replace:true})
        }
      })
      .catch(error =>{
        console.error(error)
      })
  
  }

  const handleUpdateUserProfile = (name,photoURL) => {
    const profile = {
      displayName:name,
      photoURL:photoURL
    }
    updateUserProfile(profile)
    .then( () => {})
    .catch(error => console.error(error))

  }

    return (
        <Form onSubmit={handleSubmit} className='login'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
      </Form.Group>
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
      <p>Already have an account <Link to='/login'>please login</Link></p>
    </Form>
    );
};

export default Register;