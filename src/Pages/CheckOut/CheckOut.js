import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkOut = useLoaderData()
    const { title } = checkOut;
    return (
        <div className='mt-5'>
            <h1>Your Selected Course is: {title}</h1>
        </div>
    );
};

export default CheckOut;