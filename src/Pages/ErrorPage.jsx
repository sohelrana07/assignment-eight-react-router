import React from "react";
import { Link } from "react-router";
import ErrorPageImg from "../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img className="h-80" src={ErrorPageImg} alt="" />
      <h2 className="text-4xl font-bold mt-4">Oops, page not found!</h2>
      <p className="text-xl text-[#627382] mt-2">
        The page you are looking for is not available.
      </p>
      <Link
        to="/"
        className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold mt-4 px-7"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
