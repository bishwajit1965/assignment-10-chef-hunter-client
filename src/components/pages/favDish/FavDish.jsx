import React from "react";

const FavDish = ({ dish }) => {
  const { name, picture, price, likes } = dish;
  console.log(dish);
  return (
    <div className="col-span-3">
      <img src={picture} alt="" className="h-44 w-full rounded-md shadow-lg" />
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Likes: {likes}</p>
    </div>
  );
};

export default FavDish;
