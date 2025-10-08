import React from "react";
import { Link } from "react-router";

const StatesSection = () => {
  return (
    <div className="my-10">
      <img className="lg:max-w-2/3 lg:h-96 mx-auto" src="./hero.png" alt="" />
      <div className="py-20 md:p-20 text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-center">
        <h1 className="text-2xl lg:text-4xl font-semibold md:font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col lg:flex-row justify-around gap-10 lg:gap-0 mt-10">
          <div>
            <p className="text-sm">Total Downloads</p>
            <h2 className="text-5xl font-bold my-4">29.6M</h2>
            <p className="text-sm">21% more than last month</p>
          </div>
          <div>
            <p className="text-sm">Total Reviews</p>
            <h2 className="text-5xl font-bold my-4">906K</h2>
            <p className="text-sm">46% more than last month</p>
          </div>
          <div>
            <p className="text-sm">Active Apps</p>
            <h2 className="text-5xl font-bold my-4">132+</h2>
            <p className="text-sm">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatesSection;
