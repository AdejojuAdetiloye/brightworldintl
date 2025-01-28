/* eslint-disable @next/next/no-img-element */
import React from "react";
import LearningPracticalFrenchCard from "./cards/learning-practical-french-card";

const LearnPracticalFrench = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="relative bg-white w-[700px] h-[500px] items-center justify-center rounded-lg shadow-lg p-6 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div className="w-[500px] h-[300px]">
          <LearningPracticalFrenchCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default LearnPracticalFrench;
