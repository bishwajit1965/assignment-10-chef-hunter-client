import React from "react";
import InnerCard from "../innerCard/InnerCard";

const FavouriteDishCard = ({ myRecipe }) => {
  const { name, picture } = myRecipe;
  return (
    <div className="">
      <div className="relative">
        <img
          src={picture}
          alt="chef-image"
          className="object-cover h-56 w-full rounded-md shadow-lg mb-3"
        />
        {/* <div className="md:absolute inset-0 bg-gray-900 opacity-40 rounded-md"></div> */}
        <div className="absolute top-1/2 bottom-1/2 left-1/4">
          <h4 className="text-3xl font-bold text-white animate-pulse">
            {name}
          </h4>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 w-full md:justify-between items-center gap-2">
        {myRecipe.dishes.map((dish, idx) => (
          <InnerCard key={idx} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default FavouriteDishCard;
