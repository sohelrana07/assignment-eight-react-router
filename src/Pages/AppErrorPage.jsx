import React from "react";
import { Link } from "react-router";
import AppErrorImg from "../assets/App-Error.png";
import { AiOutlineHome } from "react-icons/ai";

const AppErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <title>App Not Found 404</title>
      <img className="h-80" src={AppErrorImg} alt="" />
      <h2 className="text-4xl font-bold mt-4">OPPS!! APP NOT FOUND</h2>
      <p className="text-xl text-[#627382] mt-2">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <Link
        to="/"
        className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold mt-4"
      >
        <AiOutlineHome size={22} /> Go Home
      </Link>
    </div>
  );
};

export default AppErrorPage;
