import React from "react";
import DownloadImg from "../assets/icon-downloads.png";
import RatingImg from "../assets/icon-ratings.png";

const InstalledApps = ({ app, handleRemoveApp }) => {
  const { id, title, image, downloads, ratingAvg, size } = app;

  return (
    <div className="bg-white p-4 rounded-sm shadow-sm flex justify-between items-center mt-5">
      <div className="flex items-center gap-5">
        <figure>
          <img
            src={image}
            alt=""
            className="w-20 h-20 object-cover rounded-lg border border-[#FF8811] shadow-md"
          />
        </figure>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex justify-between items-center gap-2 md:gap-5 mt-2.5 text-xs md:text-base">
            <span className="flex items-center gap-0.5">
              <img src={DownloadImg} alt="" className="w-4 h-4" />
              <p className="text-[#00D390]">{downloads}M</p>
            </span>
            <span className="flex items-center gap-1">
              <img src={RatingImg} alt="" className="w-4 h-4" />
              <p className="text-[#FF8811]">{ratingAvg}</p>
            </span>
            <p className="text-[#627382]">{size} MB</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleRemoveApp(id)}
        className="w-fit mx-auto lg:mx-0 btn bg-[#00D390] text-white mr-0 hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledApps;
