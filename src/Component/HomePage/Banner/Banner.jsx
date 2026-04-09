import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10 p-10 md:p-20 lg:p-25 bg-[#131313]/5 mt-5 rounded-2xl">
      <div className="">
        <h1 className="text-[56px] md:text-[50px] lg:text-[60px] font-bold">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn bg-[#23BE0A] text-[#FFFFFF] text-xl rounded-xl font-semibold p-6 mt-10">
          View The List
        </button>
      </div>
      <div className="w-full">
        <img className="rounded-2xl" src="/src/assets/hero_img.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
