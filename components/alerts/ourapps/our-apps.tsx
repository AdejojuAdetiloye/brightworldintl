/* eslint-disable @next/next/no-img-element */
import React from "react";
import OurAppsCard from "./card/our-apps-card";

const OurApps = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="relative bg-white w-[800px] h-[400px] rounded-lg shadow-lg p-6 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div className="items-center justify-center">
          <OurAppsCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default OurApps;
