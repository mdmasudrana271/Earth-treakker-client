import React from "react";
import { useLoaderData } from "react-router-dom";
import DestinationCard from "../DestinationCard/DestinationCard";
import "./destination.css";

const Destination = () => {
  const destination = useLoaderData();
  return (
   <div>
    <h2 className="text-2xl font-bold ml-14">Destination</h2>
     <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-auto w-11/12 gap-4 my-11">
    {
      destination.map(card=> <DestinationCard key={card.id} card={card}></DestinationCard>)
    }
  </div>
   </div>
  );
};

export default Destination;
