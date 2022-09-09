import React from 'react';
import {Link, useParams} from 'react-router-dom'

const ServicesDetails = () => {
    const {serviceId}=useParams();
    return (
        <div>
                <h1>ServicesDetails{serviceId} </h1>
                <div className='text-center '>
                <Link  to={'/checkout'}>
                    <button className='btn btn-primary '>Proceed Check Out</button>
                </Link>
                </div>
        </div>
    );
};

export default ServicesDetails;