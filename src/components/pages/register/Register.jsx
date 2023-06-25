import React, { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import {
  hideErrorElements,
  hideSuccessElements,
} from "../../../helpers/Helpers";
import { Link } from "react-router-dom";
import { IoIosPersonAdd } from "react-icons/io";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    // Input values
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, email, password, confirmPassword);

    // Password validation
    if (email.trim() == "") {
      setError("Email field is blank.");
      hideErrorElements();
      return false;
    } else if (password.trim() == "") {
      setError("Passwords field is empty.");
      hideErrorElements();
      return false;
    } else if (confirmPassword.trim() == "") {
      setError("Confirm passwords field is empty.");
      hideErrorElements();
      return false;
    } else if (password.trim().length < 6) {
      setError("Password must be six characters.");
      return false;
    } else if (password.trim() !== confirmPassword.trim()) {
      setError("Passwords do not match.");
      hideErrorElements();
      return false;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Add at least one uppercase letter.");
      hideErrorElements();
      return false;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Add at least two numbers.");
      hideErrorElements();
      return false;
    }

    // Create/ register  user
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSuccess("User registration is successful !!!");
        hideSuccessElements();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError("User registration encountered an error.");
        hideErrorElements();
      });

    //Clean the form input
    form.reset();
    // Clean messages
    setSuccess("");
    setError("");
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-80 mx-auto">
      <form
        name="registration-form"
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow-lg w-80 mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Sign up</h2>
        <div className="mb-1">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="border border-gray-400 p-1 w-full rounded"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-1">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-400 p-1 w-full rounded"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-1">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="photoUrl"
          >
            Photo URL
          </label>
          <input
            className="border border-gray-400 p-1 w-full rounded"
            id="photoUrl"
            type="url"
            name="photoUrl"
            placeholder="Enter a URL for your profile photo"
          />
        </div>
        <div className="mb-1">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border border-gray-400 p-1 w-full rounded"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-1">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="border border-gray-400 p-1 w-full rounded"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
          />
        </div>
        <div className="mb-1">
          <small>
            <span className="text-gray-700 mr-2">Already a member ?</span>
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
              Please log in
            </Link>
          </small>
        </div>
        <div className="">
          {success && (
            <p>
              <i className="text-green-500" id="success-message">
                {success}
              </i>
            </p>
          )}
          {error && (
            <p>
              <i className="text-red-500" id="error-message">
                {error}
              </i>
            </p>
          )}
        </div>
        <div className="mb-2">
          <label className="inline-flex items-center">
            <input
              checked={isChecked}
              onChange={handleCheckboxChange}
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <small className="ml-2 text-gray-700">
              I accept{" "}
              <Link to="/terms-conditions">
                <span className="text-blue-600">the terms and conditions</span>
              </Link>
            </small>
          </label>
        </div>
        <div className="flex justify-center w-full mt-4">
          <button
            type="submit"
            disabled={!isChecked}
            className={`bg-indigo-500 inline-flex justify-center hover:bg-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded w-full ${
              !isChecked ? "opacity-50" : ""
            }`}
          >
            <IoIosPersonAdd className="h-6 w-6 mr-1 text-white inline-flex" />{" "}
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
