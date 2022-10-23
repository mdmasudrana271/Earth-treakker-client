import React from "react";
import './DestiDetails.css'
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from "react-router-dom";

const DestiDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const {name,image, description} = details
  return (
    <section className='body'>
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl text-slate-700 font-bold leading-none sm:text-6xl mb-3">
            {name}
          </h1>
          <p className="font-semibold">
            {description}
          </p>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-5">
            <Link

                to='/booking'
              rel="noopener noreferrer"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-orange-400 dark:text-gray-900 flex items-center justify-between gap-2"
            >
              <p>Book Now</p> <FaArrowRight></FaArrowRight>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={image}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default DestiDetails;
