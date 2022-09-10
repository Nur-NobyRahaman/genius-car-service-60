import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Socal from '../Login/Socal/Socal';
import Spinner from 'react-bootstrap/esm/Spinner';
const Register = () => {

    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
   
    if (user) {
        navigate('/home')
        console.log('user',user);


    }
    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        // const agree = event.target.terms.checked;

        createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        console.log( name);
        

    }

    return (
        <div className='register-from'>
            <form onSubmit={handleRegister}>
                <h2 className='from-title text-primary mb-3'>Please Register</h2>
                <input type={'text'} placeholder="Your Name" name='name'></input>
                <input type={'email'} placeholder="Your Email" name='email'></input>
                <input type={'password'} placeholder="Your Password" name='password'></input>
                <div className='my-3 text-center'>
                    <input onClick={() => setAgree(!agree)} className='mx-2 ' type={'checkbox'} name='terms' id='terms' ></input>
                    <label className={agree ? 'text-primary' : 'text-danger'} htmlFor='terms'>Accept genius car service's terms and condition </label>
                </div>
                {loading && <p className='ms-5'>loading<Spinner className='ms-2' style={{height:'13px' , width:'13px'}} animation="border" variant="dark" /></p>}
                <input
                    disabled={!agree}
                    className='from-submit btn btn-primary  text-light' type={'submit'}
                    value="Register">

                </input>
            </form>
            <p className=' d-block mx-auto w-75 mt-3'>Already have account? <Link to={'/login'} className='text-primary text-decoration-none' >Please Login</Link></p>
            <Socal></Socal>

        </div>
    );
};

export default Register;