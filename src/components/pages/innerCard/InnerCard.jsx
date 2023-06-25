import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  addToDb,
  getShoppingCart,
  removeFromDb,
} from "../../../helpers/fakedb";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import { FaRemoveFormat } from "react-icons/fa";

const InnerCard = ({ dish }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { id, name, picture } = dish;

  const handleAddToCart = () => {
    const storedCartData = getShoppingCart();
    if (id in storedCartData) {
      MySwal.fire({
        icon: "error",
        title: "Sorry",
        text: "Favourite food is already added!",
        footer: "Add another one",
        timer: 1500,
      });
    } else {
      addToDb(id);
      MySwal.fire({
        icon: "success",
        title: "Good job",
        text: "Your favourite food has been added!!!",
        footer: "SUCCESSFUL!!!",
        timer: 1500,
      });
    }
  };
  const handleRemoveCart = () => {
    const storedCartData = getShoppingCart();
    if (id in storedCartData) {
      removeFromDb(id);
      MySwal.fire({
        icon: "success",
        title: "Good job",
        text: "Your favourite food has been removed!!!",
        footer: "SUCCESSFUL!!!",
        timer: 1500,
      });
      handleDisabled();
    } else {
      MySwal.fire({
        icon: "error",
        title: "Sorry",
        text: "Your have not added this food item!!!",
        footer: "SUCCESSFUL!!!",
        timer: 1500,
      });
    }
  };

  const handleDisabled = () => {
    setIsDisabled(false);
  };

  const handleClick = () => {
    handleAddToCart();
    setIsDisabled(true);
    // Do something else when the button is clicked
  };
  return (
    <div className="">
      <div className="col-span-1 relative z-10 w-full">
        <img
          src={picture}
          alt="Recipe"
          className="object-cover rounded-md h-40 w-full"
        />
        <div className="md:absolute inset-0 bg-gray-900 opacity-40 rounded-md"></div>
        <div className="absolute  top-1/2 bottom-1/2 left-1/4 z-50">
          <small className="font-bold text-white animate-pulse">{name}</small>
        </div>
        <div className="absolute bottom-0 left-0 z-50 text-white w-full">
          <Link onClick={handleClick}>
            <button
              disabled={isDisabled}
              type="submit"
              className={`bg-indigo-900 w-full ${
                isDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-600"
              }`}
            >
              My Favourite Dish
            </button>
          </Link>
        </div>
      </div>
      <div className=" w-full">
        <button
          onClick={handleRemoveCart}
          type="submit"
          className="top-0 inline-flex justify-center text-white items-center bg-amber-900 w-full rounded-b-md"
        >
          Remove food <FaRemoveFormat className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default InnerCard;
