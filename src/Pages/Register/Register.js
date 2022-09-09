import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    if (user) {
        navigate('/home')

    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='register-from'>
            <form onSubmit={handleRegister}>
                <h2 className='from-title text-primary mb-3'>Please Register</h2>
                <input type={'text'} placeholder="Your Name" name='name'></input>
                <input type={'email'} placeholder="Your Email" name='email'></input>
                <input type={'password'} placeholder="Your Password" name='password'></input>
                {loading && <p>loading.....</p>}
                <input className='from-submit' type={'submit'} value="Register"></input>
            </form>
            <p className=' w-100 mt-3'>Already have account? <Link to={'/login'} className='text-danger text-decoration-none' >Please Login</Link></p>

        </div>
    );
};

export default Register;