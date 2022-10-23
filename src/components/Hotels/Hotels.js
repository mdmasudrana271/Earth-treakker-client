import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
    const hotels = useLoaderData()
    console.log(hotels)
    return (
        <div className='my-10'>
            {
                hotels.map(hotel=> <Hotel key={hotel.id} hotel={hotel}></Hotel>)
            }
        </div>
    );
};

export default Hotels;