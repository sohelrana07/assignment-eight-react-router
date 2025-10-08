import React from "react";
import Banner from "../Components/Banner";
import StatesSection from "../Components/StatesSection";
import useApplications from "../Hooks/useApplications";

const Home = () => {
  const { applications, loading, error } = useApplications();

  console.log(applications);
  return (
    <div>
      <Banner></Banner>
      <div className="-mx-[50vw] relative left-1/2 w-screen">
        <StatesSection></StatesSection>
      </div>
      <div className="">{}</div>
    </div>
  );
};

export default Home;
