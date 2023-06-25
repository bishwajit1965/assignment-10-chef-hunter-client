import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiUserCircle, HiMenu, HiX } from "react-icons/hi";
import "./NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [openNavMenu, setNavMenuOpen] = useState(false);

  // Logout
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 3,
      name: "Register",
      path: "/register",
    },
    {
      id: 4,
      name: "About us",
      path: "/about",
    },
  ];
  return (
    <div className="z-50 md:flex md:justify-between bg-gray-100 md:px-36 shadow-lg md:py-3 header-content sticky top-0">
      <div className="invisible lg:visible uppercase">
        <Link to="/">
          <h1 className="font-bold uppercase md:text-2xl text-blue-500">
            The chef hunter
          </h1>
        </Link>
      </div>
      <nav className="">
        <div onClick={() => setNavMenuOpen(!openNavMenu)} className="md:hidden">
          <span className="">
            {openNavMenu === true ? (
              <HiX className="h-10 w-10 text-purple-600" />
            ) : (
              <HiMenu className="h-10 w-10 text-purple-600" />
            )}
          </span>
        </div>
        <ul
          className={`grid bg-gray-100 md:flex font-bold md:justify-between md:space-x-10 md:items-center lg:items-center items-center absolute md:static duration-1000 w-full px-1 ${
            openNavMenu ? "top-20" : "-top-48"
          }`}
        >
          {routes.map((route) => (
            <NavLink
              key={route.id}
              to={route.path}
              className={({ isActive }) =>
                isActive ? "active animate-pulse" : "default"
              }
            >
              {route.name}
            </NavLink>
          ))}
        </ul>
      </nav>
      <div className="md:flex justify-between space-x-6 relative">
        {user ? (
          <>
            {" "}
            <Link
              onClick={handleLogOut}
              className="absolute -top-8 right-14 md:top-2 md:right-40 lg:right-16 lg:top-0 font-bold"
            >
              <button>Logout</button>
            </Link>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="absolute -top-8 right-36 md:top-2 md:right-8 lg:top-1 lg:right-14 font-bold"
            >
              Login
            </NavLink>
          </>
        )}

        <NavLink>
          <div className="absolute -top-8 right-2 md:top-2 md:right-20 lg:-top-1 lg:right-1 h-9 w-9">
            {user ? (
              <>
                <img
                  src="https://i.ibb.co/MgsDqCZ/FB-IMG-1678691214526.jpg"
                  alt=""
                  className="rounded-full"
                />
              </>
            ) : (
              <>
                <HiUserCircle className="h-10 w-10 text-blue-500" />
              </>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
