import { useParams } from "react-router";
import useApplications from "../Hooks/useApplications";
import LoadingSpinner from "./LoadingSpinner";
import AppErrorPage from "./AppErrorPage";
import DownloadImg from "../assets/icon-downloads.png";
import RatingsImg from "../assets/icon-ratings.png";
import ReviewImg from "../assets/icon-review.png";
import AppReviewChart from "./AppReviewChart";
import { useEffect, useState } from "react";
import { addToStoredApp, getStoredApp } from "../Utility/LocalStorage";

const AppDetails = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const { id } = useParams();
  const { applications, loading } = useApplications();

  useEffect(() => {
    const storedApps = getStoredApp();

    if (storedApps.includes(id)) {
      setIsInstalled(true);
    } else {
      setIsInstalled(false);
    }
  }, [id]);

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  const findApp = applications.find(
    (application) => application.id === Number(id)
  );

  if (!findApp) return <AppErrorPage></AppErrorPage>;

  const { image, title, description, downloads, reviews, ratingAvg } = findApp;

  const handleInstall = () => {
    addToStoredApp(id);
    setIsInstalled(true);
  };

  return (
    <div>
      <div className="border-b border-gray-300 pb-10 flex flex-col lg:flex-row items-center gap-10 mt-8">
        <figure>
          <img
            src={image}
            className="w-[350px] h-[350px] object-cover border-2 border-[#FF8811] rounded-lg shadow-2xl"
          />
        </figure>
        <div className="flex flex-col gap-8 flex-1">
          <div className="border-b border-gray-300 pb-7 text-center lg:text-left">
            <h1 className="text-3xl font-bold">{title}</h1>
            <h4 className="text-[#627382] text-lg mt-2">
              Developed by{" "}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                productive.io
              </span>
            </h4>
          </div>

          <div className="flex flex-row justify-center lg:justify-start items-center gap-8 lg:gap-20 flex-wrap">
            {/* downloads */}
            <div className="flex flex-col justify-center items-center lg:items-start">
              <figure>
                <img src={DownloadImg} alt="" />
              </figure>
              <p className="my-2">Downloads</p>
              <h3 className="text-4xl font-extrabold">{downloads}M</h3>
            </div>
            {/* ratings */}
            <div className="flex flex-col justify-center items-center lg:items-start">
              <figure>
                <img src={RatingsImg} alt="" />
              </figure>
              <p className="my-2">Average Ratings</p>
              <h3 className="text-4xl font-extrabold">{ratingAvg}</h3>
            </div>
            {/* review */}
            <div className="flex flex-col justify-center items-center lg:items-start">
              <figure>
                <img src={ReviewImg} alt="" />
              </figure>
              <p className="my-2">Total Reviews</p>
              <h3 className="text-4xl font-extrabold">{reviews}K</h3>
            </div>
          </div>
          <button
            disabled={isInstalled}
            onClick={handleInstall}
            className={`w-fit mx-auto lg:mx-0 btn ${
              isInstalled ? "bg-[#FF8811]" : "bg-[#00D390]"
            } text-white px-7 hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]`}
          >
            {isInstalled ? "Installed" : "Install Now (291 MB)"}
          </button>
        </div>
      </div>
      <AppReviewChart findApp={findApp}></AppReviewChart>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-justify text-[#627382] mt-6">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
