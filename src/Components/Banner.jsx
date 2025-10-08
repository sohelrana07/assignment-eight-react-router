import React from "react";
import { Link } from "react-router";
import GooglePlayImg from "../assets/Group.png";
import AppleStoreImg from "../assets/fi_5977575.png";

const Banner = () => {
  return (
    <div>
      <div className="mx-auto text-center mt-8">
        <h1 className="text-4xl lg:text-6xl font-bold">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-sm lg:text-xl text-[#627382] mx-auto mt-4 mb-10 md:max-w-2xl lg:max-w-5xl">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          <Link
            to={`https://play.google.com/store/games?hl=en`}
            className="btn py-6"
          >
            <img className="h-7" src={GooglePlayImg} alt="" />
            <span className="text-xl font-semibold">Google Play</span>
          </Link>
          <Link to={`https://www.apple.com/app-store/`} className="btn py-6">
            <img className="h-7" src={AppleStoreImg} alt="" />
            <span className="text-xl font-semibold">Apple Store</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
