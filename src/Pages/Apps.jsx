import React, { useEffect, useState } from "react";
import useApplications from "../Hooks/useApplications";
import SkeletonLoader from "./SkeletonLoader";
import { RiApps2Line } from "react-icons/ri";
import AppsCard from "./AppsCard";
import LoadingSpinner from "./LoadingSpinner";

const Apps = () => {
  const [showSkeletonLd, setShowSkeletonLd] = useState(false);
  const [searching, setSearching] = useState(false);
  const { applications, loading } = useApplications();
  const [search, setSearch] = useState("");

  const searchData = search.split(" ").join("").toLowerCase();
  const searchedApplications = searchData
    ? applications.filter((application) =>
        application.title.toLowerCase().includes(searchData)
      )
    : applications;

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearching(true);
    setSearch(value);
  };

  setTimeout(() => {
    setSearching(false);
  }, 800);

  useEffect(() => {
    if (!loading) {
      setShowSkeletonLd(true);
      const timer = setTimeout(() => setShowSkeletonLd(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <title>Hero.Io | Apps</title>
      <div className="flex flex-col justify-center items-center text-center mt-8">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-0.5">
          Our All Applications <RiApps2Line />
        </h1>
        <p className="text-[#627382] text-xl mt-2 md:mt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10">
        <h2 className="text-2xl font-semibold mb-2 md:mb-0">
          ({searchedApplications.length}) Apps Found
        </h2>
        <label className="input border-[#9F62F2] shadow-sm">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={handleSearch}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>

      {searching || showSkeletonLd ? (
        <SkeletonLoader count={20}></SkeletonLoader>
      ) : searchedApplications.length === 0 ? (
        <div className="min-h-screen flex flex-col justify-center items-center space-y-8">
          <h1 className="text-3xl lg:text-5xl text-gray-500 font-bold">
            No Apps Found
          </h1>
          <button
            onClick={() => setSearch("")}
            className="w-fit btn bg-gray-700 text-white font-medium px-5"
          >
            Show All Apps
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {searchedApplications.map((application) => (
            <AppsCard key={application.id} application={application}></AppsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
