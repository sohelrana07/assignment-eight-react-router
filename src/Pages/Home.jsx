import React from "react";
import Banner from "../Components/Banner";
import StatesSection from "../Components/StatesSection";
import useApplications from "../Hooks/useApplications";
import SkeletonLoader from "./SkeletonLoader";
import { Link } from "react-router";
import { IoMdTrendingUp } from "react-icons/io";
import AppsCard from "./AppsCard";


const Home = () => {
  const { applications, loading } = useApplications();

  const topApplications = applications.slice(0, 8);

  return (
    <div>
      <Banner></Banner>
      <div className="-mx-[50vw] relative left-1/2 w-screen">
        <StatesSection></StatesSection>
      </div>
      <div className="mt-6 md:mt-10 lg:mt-20">
        <span className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold flex items-center gap-1.5">
            Trending Apps
            <IoMdTrendingUp className="mt-1" color={`#632EE3`} />
          </h1>
          <p className="text-[#627382] text-xl mt-2 md:mt-4 text-center">
            Explore All Trending Apps on the Market developed by us
          </p>
        </span>

        {/* Top Apps Container */}
        {loading ? (
          <SkeletonLoader count={8}></SkeletonLoader>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 md:mt-8 lg:mt-10">
            {topApplications.map((application) => (
              <AppsCard
                key={application.id}
                application={application}
              ></AppsCard>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link
            to="/apps"
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-medium px-8"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
