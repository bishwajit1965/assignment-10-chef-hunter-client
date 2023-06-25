import React from "react";
import { useLoaderData } from "react-router-dom";
import FavouriteDishCard from "../favouriteDishCard/FavouriteDishCard";

const FavouriteRecipes = () => {
  const favRec = useLoaderData();
  return (
    <div className="md:mx-36 md:my-14 grid md:grid-cols-3 justify-between gap-8 items-center">
      {favRec.map((myRecipe, idx) => (
        <FavouriteDishCard key={idx} myRecipe={myRecipe} />
      ))}
    </div>
  );
};

export default FavouriteRecipes;
