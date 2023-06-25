import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import {
  hideErrorElements,
  hideSuccessElements,
} from "../../../helpers/Helpers";
import { IoIosLogIn, IoLogoGoogle } from "react-icons/io";
import { GoMarkGithub } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const LogIn = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { userLogIn, changePassword, googleLogIn, gitHubLogIn } =
    useContext(AuthContext);
  const emailRef = useRef();

  // Redirect to desired route
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    // Input values
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // User Log in
    userLogIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Alert message
        setSuccess("Login is successful!!!");
        navigate(from, { replace: true });

        // Alert message
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User login is successful !!!",
          showConfirmButton: false,
          timer: 1500,
        });
        hideSuccessElements();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        hideErrorElements();
      });
    //Clean the form input
    form.reset();
    // Clean messages
    setSuccess("");
    setError("");
  };

  // Reset user password
  const handleResetPassword = () => {
    const emailData = emailRef.current.value;
    if (!emailData) {
      setError("Email field is empty!!!");
      hideErrorElements();
      // Alert message
      MySwal.fire({
        position: "top-end",
        icon: "success",
        title: "Empty email field !!!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      changePassword(emailData)
        .then(() => {
          setSuccess("Password reset email has been sent.");
          hideSuccessElements();
          // Alert message
          MySwal.fire({
            position: "top-end",
            icon: "success",
            title: "Password reset email has been sent.",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);

          setError(errorMessage);
          hideErrorElements();
        });
    }
  };

  // google login
  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(() => {
        MySwal.fire({
          position: "top-end",
          icon: "success",
          title: "Google log in successful !",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch(() => {});
  };

  // gitHub login
  const handleGitHubLogIn = () => {
    gitHubLogIn()
      .then((result) => {
        const user = result.user;
        MySwal.fire({
          position: "top-end",
          icon: "success",
          title: "GitHub login successful !",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-80 mx-auto">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80 mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-500">
          Please Log in{" "}
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="border border-gray-400 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border border-gray-400 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            ref={emailRef}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border border-gray-400 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
            id="password"
            name="password"
            password="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-1">
          <small>
            <span className="text-gray-700 mr-2">Forgot password ?</span>
            <Link
              onClick={handleResetPassword}
              className="text-blue-500 hover:text-blue-700"
            >
              Reset your password
            </Link>
          </small>
        </div>
        <div className="mb-1">
          <small>
            <span className="text-gray-700 mr-2">New to this site ?</span>
            <Link to="/register" className="text-blue-500 hover:text-blue-700">
              Please register
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
        <div className="flex items-center justify-center mt-2 w-full">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            <IoIosLogIn className="h-5 w-5 text-white inline-flex" /> Sign In
          </button>
        </div>

        <div className="flex items-center justify-between mt-4 gap-4">
          <div
            onClick={handleGoogleLogIn}
            className="border border-blue-400 w-1/2 rounded-sm flex justify-center items-center cursor-pointer py-1"
          >
            <IoLogoGoogle className="h-5 w-5 inline-flex mr-1" />
            Login
          </div>
          <div
            onClick={handleGitHubLogIn}
            className="border border-blue-400 w-1/2 rounded-sm flex justify-center items-center cursor-pointer py-1"
          >
            <GoMarkGithub className="h-4 w-4 inline-flex mr-1" /> Login
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
