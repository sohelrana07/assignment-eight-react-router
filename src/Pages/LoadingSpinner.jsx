import React from "react";
import { ScaleLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ScaleLoader color="#00D390"></ScaleLoader>
    </div>
  );
};

export default LoadingSpinner;
