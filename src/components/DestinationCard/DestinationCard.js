import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ card }) => {
  const {image,name,id} = card;
  return (
    <div className="w-full rounded-md shadow-md dark:bg-gray-50 dark:text-gray-100 ">
      <Link to={`/${id}`}>
      
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 "
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl text-black font-semibold tracking-wide">
            {name}
          </h2>
        </div>
      </div>
      
      </Link>
    </div>
  );
};

export default DestinationCard;
