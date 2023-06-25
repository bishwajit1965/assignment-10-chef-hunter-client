import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ChefDetail = () => {
  const chef = useLoaderData();

  const { name, photo, bio, experience, recipes, likes } = chef;
  return (
    <div className="md:px-36 md:my-14 grid md:grid-cols-2 justify-between gap-10 ">
      <div className="col-span-1 relative">
        <img
          src={photo}
          alt=""
          className="object-cover rounded-md h-full w-full shadow-lg"
        />

        <h1 className="text-4xl font-bold mb-5 absolute top-1/2 left-1/4 text-white animate-bounce animate-ping">
          {name}
        </h1>
      </div>

      <div className="col-span-1 p-2">
        <h1 className="text-4xl font-bold mb-5">{name}</h1>
        <p>{bio}</p>
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
        <div className="w-full">
          <Link to="/">
            <button className="bg-indigo-500 text-white p-2 w-full rounded-sm">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefDetail;
