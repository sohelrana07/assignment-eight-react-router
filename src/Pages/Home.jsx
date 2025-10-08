import React from "react";
import Banner from "../Components/Banner";
import StatesSection from "../Components/StatesSection";
import useApplications from "../Hooks/useApplications";
import TopAppsCard from "./TopAppsCard";

const Home = () => {
  const { applications, loading, error } = useApplications();

  const topApplications = applications.slice(0, 8);

  return (
    <div>
      <Banner></Banner>
      <div className="-mx-[50vw] relative left-1/2 w-screen">
        <StatesSection></StatesSection>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 md:mt-8 lg:mt-12">
        {topApplications.map((application) => (
          <TopAppsCard
            key={application.id}
            application={application}
          ></TopAppsCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
