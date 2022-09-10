import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from 'react-bootstrap/esm/Spinner';

const RequiredAuth = ({children}) => {
    const [user,loading]=useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <p>Loading<Spinner className='ms-2' style={{height:'13px' , width:'13px'}} animation="border" variant="dark" /></p>;
      }

    if(!user){
        return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    }
    return children;
};

export default RequiredAuth;