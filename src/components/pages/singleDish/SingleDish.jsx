import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../../helpers/fakedb";

const SingleDish = () => {
  const data = useLoaderData();
  const { name } = data;
  const id = useParams();
  const dataAdded = addToDb(id);
  if (dataAdded) {
    alert("OK");
  } else {
  }
  // localStorage.setItem("recipe", JSON.stringify(id));
  console.log(id);

  console.log(data);
  return (
    <div className="md:mx-36 md:my-14">
      SingleDish
      <p>{name}</p>
    </div>
  );
};

export default SingleDish;
