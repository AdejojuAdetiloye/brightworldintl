
import React from "react";

const HomeTop = () => {

  return (
    <div className="w-full sm:w-full items-center justify-center mt-10 sm:mt-20 bg-gradient-to-r from-blue-600 to-yellow-600 p-10">
      <div className="flex flex-row sm:pl-20 pl-6 items-center">
        <h2 className="sm:text-3xl text-xl font-bold text-slate-100 font-sans">About us </h2>
        <p className="font-extrabold sm:h-5 h-7 border border-white border-solid m-3"></p>
        <h3 className="sm:text-xl font-bold text-slate-100 font-sans">The Firm </h3>
        <p className="font-extrabold sm:h-5 h-7 border border-white border-solid m-3"></p>
        <h3 className="sm:text-xl font-bold text-slate-100 font-sans">Our Vision & Mission </h3>
        <p className="font-extrabold sm:h-5 h-7 border border-white border-solid m-3"></p>
        <h3 className="sm:text-xl font-bold text-slate-100 font-sans">Our Core Values & Corporate Culture</h3>
      </div>
    </div>
  );
};

export default HomeTop;
