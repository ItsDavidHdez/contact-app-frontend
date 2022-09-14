import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { handleAuth } from "../services/auth";

const Navbar = () => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    location.reload();
  };

  return (
    <div className="bg-neutral-800 flex justify-between px-20 py-4">
      <Link to="/" className="text-white font-bold">
        Contact App
      </Link>
      <ul className="flex gap-x-1">
        {handleAuth() ? (
          <>
            <li>
              <Link to="/new" className=" bg-teal-200 px-2 py-1">
                Create Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                onClick={() => handleLogOut()}
                className=" bg-teal-200 px-2 py-1"
              >
                Log out
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/" className="bg-slate-200 px-2 py-1">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="bg-slate-200 px-2 py-1">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="bg-slate-200 px-2 py-1">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
