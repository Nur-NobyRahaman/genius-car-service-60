import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Servies.css'

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id='services' >
        <div className='container'>
            <h2 className='text-primary text-center m-5'>Our Services</h2>
            <div className='services-container'>
            {
                services.map( service =>
                    <Service
                    key={service.key}
                    service={service}
                    ></Service>
                )
            }
            </div>
        </div>
        </div>
    );
};

export default Services;