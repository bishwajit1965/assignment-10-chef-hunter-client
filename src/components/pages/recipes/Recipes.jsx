import React from "react";
import { useLoaderData } from "react-router-dom";
import FavDish from "../favDish/FavDish";

const Recipes = () => {
  const dishes = useLoaderData();
  return (
    <div className="md:mx-36 md:my-14 grid md:grid-cols-12 justify-between items-center gap-4">
      {dishes.map((dish) => (
        <FavDish key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export default Recipes;
