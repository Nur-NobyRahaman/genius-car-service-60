import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Socal from './Socal/Socal';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'react-bootstrap';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );


    if (user) {
        navigate(from);
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)


    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('First enter your email')
        }
    }


    return (
        <div className='border border-3 w-50 mx-auto m-5 pb-5 pt-5'>
            <h2 className='text-primary text-center mt-3'> Please Login</h2>
            <Form onSubmit={handleSubmit} className='container w-75 mx-auto '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                {
                    error && <p className='text-danger text-center'>Error: {error?.message} </p>
                }

                {
                    loading &&
                    <p className='w-75 d-block mx-auto'>Loading<Spinner className='ms-2' style={{height:'13px' , width:'13px'}} animation="border" variant="dark" /></p>
                }
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='container w-75 mt-3'>New to Genius car? <Link to={'/register'} className='text-primary text-decoration-none' >Please Register</Link></p>
            <p onClick={resetPassword} className='container w-75 mt-3'>Forger Password? <Link to={''} className='text-primary text-decoration-none' >Reset Password</Link></p>
            <ToastContainer />
            <Socal></Socal>


        </div>
    );
};

export default Login;