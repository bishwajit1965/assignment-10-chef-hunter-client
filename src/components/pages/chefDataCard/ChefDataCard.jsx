import React, { useState } from "react";
import { textShortener } from "../../../helpers/Helpers";
import { FaEye, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefDataCard = ({ chef }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { id, name, photo, bio, experience, recipes, likes } = chef;

  const handleClick = () => {
    setIsDisabled(true);
    // Do something else when the button is clicked
  };
  return (
    <div className="grid col-span-3 w-full border rounded-t-md shadow-lg rounded-b-sm relative mb-2">
      <LazyLoad threshold={0.95}>
        <img
          src={photo}
          alt="chef-photo"
          className="object-cover h-72 w-full rounded-t-md"
        />
      </LazyLoad>
      <div className="p-2">
        <div className="mb-12">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p>{textShortener(bio, 150)}</p>
          <div className="flex justify-between items-center my-4">
            <div className="text-indigo-600">
              <small className="font-bold">Exp: {experience}</small>
            </div>
            <div className="text-indigo-600">
              <small className="font-bold"> Rec:{recipes}</small>
            </div>
            <div className="text-indigo-600">
              <small className="font-bold">Likes:{likes}</small>{" "}
            </div>
          </div>
        </div>
        <Link to={`/chefs/${id}`}>
          <button
            onClick={handleClick}
            disabled={isDisabled}
            type="submit"
            className={`absolute bg-blue-500 text-white w-full bottom-0 left-0  inline-flex items-center justify-center rounded-b-sm font-bold py-2 px-4 transition-colors ${
              isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
          >
            <FaEye className="w-5 h-5 mr-1" />
            {isDisabled ? "Loading..." : "View Recipe"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChefDataCard;
