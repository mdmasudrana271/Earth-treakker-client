import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hotel = ({ hotel }) => {
    const { image, name, description, ratings, facility, price, id } = hotel;
    console.log(id);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-8/12 mx-auto my-8">
      <figure className="w-6/12">
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body w-6/12">
        <h2 className="card-title">{name}</h2>
        <p>
          {description.length > 200
            ? description.slice(0, 100) + "...."
            : description}
        </p>
        <p>{facility}</p>
        <p>
          <small>Price: {price}</small>
        </p>
        <p className="flex items-center gap-1">
          <FaStar className="text-amber-400"></FaStar> <span>{ratings}</span>
        </p>
        <button className="btn btn-primary"><Link to={`/hotels/${id}`}>Details</Link></button>
      </div>
    </div>
  );
};

export default Hotel;
