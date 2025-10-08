import React from "react";

const SkeletonLoader = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 md:mt-8 lg:mt-10">
      {Array.from({ length: count }).map((_, i) => {
        return (
          <div key={i} className="flex flex-col gap-4">
            <div className="skeleton h-56 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        );
      })}
    </div>
  );
};

export default SkeletonLoader;
