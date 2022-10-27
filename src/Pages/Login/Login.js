import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const { googleLoginProvider, githubLoginProvider, signIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        googleLoginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }
    const handleGithubSignIn = () => {
        githubLoginProvider(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('')
                navigate('/')
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }
    return (
        <div>
            <Form onSubmit={handleLogIn} className='w-50 mx-auto my-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
                <p>Create a new Accout<Link to='/register'>Register</Link></p>
            </Form>

            <button onClick={handleGoogleSignIn}>Google</button>
            <button onClick={handleGithubSignIn}>GitHub</button>
        </div>
    );
};

export default Login;