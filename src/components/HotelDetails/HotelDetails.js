import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const HotelDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const { name, description, price, ratings, facility, image } = details;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl mx-5 my-8 flex">
        <figure className="w-6/12">
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body w-6/12">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>{facility}</p>
          <p>Price: {price}</p>
          <p className="flex items-center gap-1">
            <FaStar className="text-amber-400"></FaStar> <span>{ratings}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
