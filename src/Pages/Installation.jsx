import React, { useState } from "react";
import { RiApps2Line } from "react-icons/ri";
import DownloadImg from "../assets/icon-downloads.png";
import RatingImg from "../assets/icon-ratings.png";
import useApplications from "../Hooks/useApplications";

const Installation = () => {
  const [installs, setInstalls] = useState([])
const { applications, loading } = useApplications();



  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-8">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-0.5">
          Your Installed Apps <RiApps2Line />
        </h1>
        <p className="text-[#627382] text-xl mt-2 md:mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10">
        <h2 className="text-2xl font-semibold mb-2 md:mb-0">(20) Apps Found</h2>

        <label className="form-control w-full max-w-32">
          <select
            className="select select-bordered"
            // value={sortOrder}
            // onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Size</option>
            <option value="price-aac">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="bg-white p-4 rounded-sm shadow-sm flex justify-between items-center mt-5">
        <div className="flex items-center gap-5">
          <figure>
            <img src="" alt="" className="w-20 h-20 rounded-lg" />
          </figure>
          <div>
            <h3 className="text-xl font-medium">
              Forest: Focus for Productivity
            </h3>
            <div className="flex  items-center gap-5 mt-2.5">
              <span className="flex items-center gap-0.5">
                <img src={DownloadImg} alt="" className="w-4 h-4" />
                <p className="text-[#00D390]">9M</p>
              </span>

              <span className="flex items-center gap-1">
                <img src={RatingImg} alt="" className="w-4 h-4" />
                <p className="text-[#FF8811]">5</p>
              </span>
              <p className="text-[#627382]">258 MB</p>
            </div>
          </div>
        </div>
        <button className="w-fit mx-auto lg:mx-0 btn bg-[#00D390] text-white">
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default Installation;
