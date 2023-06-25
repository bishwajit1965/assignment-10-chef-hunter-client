import React from "react";
import notFoundImage from "../../../assets/images/404.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img
        src={notFoundImage}
        alt="404 Not Found"
        className="w-48 h-48 mb-8 rounded-full shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-4">
        <span className="text-amber-600 font-bold"> ERROR !!! </span>{" "}
        <span className="text-red-600 font-bold text-5xl">404</span> Not Found
      </h1>
      <p className="text-lg text-center">
        The page you requested could not be found.
      </p>
      <Link to="/" className="bg-red-500 px-6 py-2 rounded-sm text-white mt-4">
        Go back
      </Link>
    </div>
  );
};
export default NotFound;
