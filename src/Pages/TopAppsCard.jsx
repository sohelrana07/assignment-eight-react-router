import React from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const TopAppsCard = ({ application }) => {
  const { title, image, downloads, ratingAvg } = application;

  return (
    <div className="card bg-white shadow-sm p-4">
      <figure>
        <img
          className="h-56 w-full object-cover rounded-lg border border-gray-200"
          src={image}
          alt="Application"
        />
      </figure>
      <div className="">
        <h2 className="text-xl font-medium my-4">{title}</h2>
        <div className="flex justify-between items-center">
          <span className="text-[#00D390] flex items-center gap-2 p-1.5 bg-[#F1F5E8] rounded-sm">
            <FiDownload />
            {downloads}M
          </span>
          <span className="text-[#FF8811] flex items-center gap-2 p-1.5 bg-[#FFF0E1] rounded-sm">
            <FaStar />
            {ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopAppsCard;
