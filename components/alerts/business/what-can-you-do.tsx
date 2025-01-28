/* eslint-disable @next/next/no-img-element */
import React from "react";
import WhatCanYouDoCard from "./card/what-can-you-do-card";

const WhatCanYouDo = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="relative bg-white w-[700px] h-[400px] rounded-lg shadow-lg p-6 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div className="w-[600px] h-[400px] p-2 text-center justify-center overflow-y-auto">
          <WhatCanYouDoCard isOpen={isOpen} onClose={onClose} data={data} />
        </div>
      </div>
    </div>
  );
};

export default WhatCanYouDo;
