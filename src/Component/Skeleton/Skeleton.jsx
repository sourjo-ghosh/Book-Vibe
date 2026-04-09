import React from "react";

const Skeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
      {Array(9)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex justify-center items-center">
            <div className="flex w-88 h-auto flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Skeleton;
