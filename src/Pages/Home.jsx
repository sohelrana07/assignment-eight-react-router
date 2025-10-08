import React from "react";
import Banner from "../Components/Banner";
import StatesSection from "../Components/StatesSection";
import useApplications from "../Hooks/useApplications";
import TopAppsCard from "./TopAppsCard";
import SkeletonLoader from "./SkeletonLoader";
import { Link } from "react-router";

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
        <span className="text-center">
          <h1 className="text-4xl font-bold">Trending Apps</h1>
          <p className="text-[#627382] text-xl mt-2 md:mt-4">
            Explore All Trending Apps on the Market developed by us
          </p>
        </span>

        {/* Top Apps Container */}
        {loading ? (
          <SkeletonLoader count={8}></SkeletonLoader>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 md:mt-8 lg:mt-10">
            {topApplications.map((application) => (
              <TopAppsCard
                key={application.id}
                application={application}
              ></TopAppsCard>
            ))}
          </div>
        )}

        {/* {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 md:mt-8 lg:mt-10">
            {topApplications.map((application) => (
              <TopAppsCard
                key={application.id}
                application={application}
              ></TopAppsCard>
            ))}
          </div>
        ) : (
          <SkeletonLoader count={8}></SkeletonLoader>
        )} */}

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
