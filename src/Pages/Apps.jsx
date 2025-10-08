import React from "react";
import useApplications from "../Hooks/useApplications";
import AppsCard from "./AppsCard";

const Apps = () => {
  const { applications, loading } = useApplications();

  return (
    <div>
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="text-[#627382] text-xl mt-2 md:mt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 md:mt-8 lg:mt-10">
        {applications.map((application) => (
          <AppsCard key={application.id} application={application}></AppsCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
