import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ChefDataCard from "../chefDataCard/ChefDataCard";
import IndianFood from "../../../assets/images/indian-food.jpg";
import "./Home.css";
import LazyLoad from "react-lazy-load";
import { FaArrowCircleRight } from "react-icons/fa";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

const Home = () => {
  const chefs = useLoaderData();

  return (
    <div className="md:px-36 md:my-14">
      {/* Banner section begins */}
      <div className="grid md:grid-cols-2 justify-between items-center gap-8 mb-16">
        <div className="col-span-1 w-full">
          <LazyLoad threshold={0.95}>
            <img
              src={IndianFood}
              alt=""
              className="object-cover rounded-md w-full shadow-lg"
            />
          </LazyLoad>
        </div>
        <div className="col-span-1 px-2">
          <h1 className="text-4xl font-bold leading-loose">
            <span className="text-amber-500 text-5xl uppercase">
              The Chef Hunter
            </span>
            <br />
            <span className="text-indigo-600">Your Perfect Food Choice !</span>
          </h1>
          <p>
            According to a survey conducted by NDTV Food, the top three favorite
            Indian dishes among Indians are biryani, butter chicken, and dosa.
            In a survey conducted by Swiggy, a popular food delivery app in
            India, the most popular Indian dishes ordered online are chicken
            biryani, masala dosa, and paneer butter masala.
          </p>
          <Link to="/recipes">
            <button className="text-white bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-md my-5 flex justify-center items-center">
              Explore Favourites <FaArrowCircleRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      {/* ./Banner section ends */}

      {/* Chef section begins */}
      <div className="md:grid grid-cols-9 gap-8 justify-between items-center">
        {chefs.map((chef) => (
          <ChefDataCard key={chef.id} chef={chef} />
        ))}
      </div>
      {/* ./Chef section ends */}

      {/* Other extra one photo gallery section begins */}
      <div className="grid md:grid-cols-12 gap-8 justify-between items-center my-10">
        <div className="col-span-3">
          <LazyLoad threshold={0.95}>
            <img
              src="https://i.ibb.co/3YN0H6Z/Butter-Chicken.jpg"
              alt=""
              className="h-44 w-full rounded-md shadow-sm"
            />
          </LazyLoad>
        </div>
        <div className="col-span-3">
          <LazyLoad threshold={0.95}>
            <img
              src="https://i.ibb.co/grbqS9g/palak-paneer-recipe.jpg"
              alt=""
              className="h-44 w-full rounded-md shadow-sm"
            />
          </LazyLoad>
        </div>
        <div className="col-span-3">
          <LazyLoad threshold={0.95}>
            <img
              src="https://i.ibb.co/wyxNjLj/Chicken-Biryani.jpg"
              alt=""
              className="h-44 w-full rounded-md shadow-sm"
            />
          </LazyLoad>
        </div>
        <div className="col-span-3">
          <LazyLoad threshold={0.95}>
            <img
              src="https://i.ibb.co/BVhjghC/AlooGobi.jpg"
              alt=""
              className="h-44 w-full rounded-md shadow-sm"
            />
          </LazyLoad>
        </div>
        <div className="col-span-3">
          <LazyLoad threshold={0.95}>
            <img
              src="https://i.ibb.co/VMD986c/Chole-Bhature.jpg"
              alt=""
              className="h-44 w-full rounded-md shadow-sm"
            />
          </LazyLoad>
        </div>
        <div className="col-span-3">
          <LazyLoad threshold={0.95}>
            <img
              src="https://i.ibb.co/26pn88V/Dal-Makhani.jpg"
              alt=""
              className="h-44 w-full rounded-md shadow-sm"
            />
          </LazyLoad>
        </div>
        <div className="col-span-3">
          <LazyLoad threshold={0.95}>
            <img
              src="https://i.ibb.co/WfqZrGz/Gulab-Jamun.jpg"
              alt=""
              className="h-44 w-full rounded-md shadow-sm"
            />
          </LazyLoad>
        </div>
        <div className="col-span-3">
          <LazyLoad threshold={0.95}>
            <img
              src="https://i.ibb.co/5YXq3Mh/Chicken-Tikka-Masala.jpg"
              alt=""
              className="h-44 w-full rounded-md shadow-sm"
            />
          </LazyLoad>
        </div>
      </div>
      <div className="text-center">
        <Link to="/dishes">
          <button
            type="submit"
            className="text-white bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-md my-5 flex justify-center items-center"
          >
            See All Favourite Dishes <FaArrowCircleRight className="ml-2" />
          </button>
        </Link>
      </div>
      {/* ./Other extra one photo gallery section ends */}

      {/* Other extra two slider section begins */}
      <div className="w-full">
        <AwesomeSlider animation="cubeAnimation">
          <div>
            <img
              src="https://i.ibb.co/QcWcFv6/sanjeev-kapoor-interview-main.jpg"
              alt=""
              className="h-96 w-full object-contain"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/WxD3Vd8/x1080.jpg"
              alt=""
              className="h-96 w-full object-contain"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/Rj8zCqx/img-109519-zorawarkalra081-mk-1.jpg"
              alt=""
              className="h-96 w-full object-contain"
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/qyqT4D4/madhur1.jpg"
              alt=""
              className="h-96 w-full object-contain"
            />
          </div>
        </AwesomeSlider>
      </div>
      {/* ./Other extra two slider section ends */}
    </div>
  );
};

export default Home;
