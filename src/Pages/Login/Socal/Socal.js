import React from 'react';
import social from '../../../images/social.png'
import facebook from '../../../images/facebook.png'
import github from '../../../images/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';



const Socal = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            {
                error || error1 && <p className='text-danger text-center'>Error: {error?.message} {error1?.message}</p>
            }
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='w-25 bg-secondary'>
                </div>
                <p className='mt-2 mx-3'>or</p>
                <div style={{ height: '1px' }} className='w-25 bg-secondary'></div>

            </div>
            <div className=''>
                {
                    loading?
                    <p className='w-75 d-block mx-auto'>Loading.....</p>:
                    <button onClick={() => signInWithGoogle()} className='btn btn-light w-75 d-block mx-auto my-3'>{<img className='mx-2' src={social} alt=""></img>}Google Sign In</button>}

               {
               loading1?
               <p className='w-75 d-block mx-auto'>Loading.....</p>:
                <button onClick={()=>signInWithGithub()} className='btn btn-secondary w-75 d-block mx-auto my-3'>{<img className='mx-2' src={github} alt=""></img>}GitHub Sign In</button>}

                <button className='btn btn-primary w-75 d-block mx-auto my-3'>{<img className='mx-2' src={facebook} alt=""></img>}FaceBook Sign In</button>
            </div>
        </div>
    );
};

export default Socal;