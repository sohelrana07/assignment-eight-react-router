import React, { useEffect, useState } from "react";
import { RiApps2Line } from "react-icons/ri";
import useApplications from "../Hooks/useApplications";
import { getStoredApp, removeToLocal } from "../Utility/LocalStorage";
import InstalledApps from "./InstalledApps";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router";
import { FaAppStoreIos } from "react-icons/fa";

const Installation = () => {
  const [installApps, setInstallApps] = useState([]);
  const [sortApps, setSortApps] = useState("none");
  const { applications, loading } = useApplications();

  useEffect(() => {
    const storedAppData = getStoredApp();
    const ConvertedStoredData = storedAppData.map((app) => Number(app));
    const installationData = applications.filter((appData) =>
      ConvertedStoredData.includes(appData.id)
    );

    setInstallApps(installationData);
  }, [applications]);

  const handleRemoveApp = (id) => {
    const remainingApp = installApps.filter((app) => app.id !== id);
    setInstallApps(remainingApp);
    removeToLocal(id);
  };

  const sortedItem = (() => {
    if (sortApps === "price-desc") {
      return [...installApps].sort((a, b) => b.downloads - a.downloads);
    } else {
      return [...installApps].sort((a, b) => a.downloads - b.downloads);
    }
  })();

  if (loading) return <LoadingSpinner></LoadingSpinner>;

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

      {/* sort */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10">
        <h2 className="text-2xl font-semibold mb-2 md:mb-0">
          ({sortedItem.length}) Apps Found
        </h2>

        <label className="form-control w-full max-w-32 ">
          <select
            className="select select-bordered border-[#FF8811]"
            value={sortApps}
            onChange={(e) => setSortApps(e.target.value)}
          >
            <option value="none">Sort By Size</option>
            <option value="price-desc">High-&gt;Low</option>
            <option value="price-aac">Low-&gt;High</option>
          </select>
        </label>
      </div>
      {sortedItem.length === 0 ? (
        <div className="min-h-96 flex flex-col justify-center items-center text-center space-y-7">
          <h1 className="text-3xl lg:text-5xl text-red-500 font-bold">
            Installed Application Not Found
          </h1>
          <p className="text-red-500">Please install the application first!</p>
          <Link
            to="/apps"
            className="w-fit btn bg-[#00D390] text-white font-medium px-5"
          >
            Go Apps <FaAppStoreIos size={22} />
          </Link>
        </div>
      ) : (
        sortedItem.map((app) => (
          <InstalledApps
            key={app.id}
            app={app}
            handleRemoveApp={handleRemoveApp}
          ></InstalledApps>
        ))
      )}
    </div>
  );
};

export default Installation;
