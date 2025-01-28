/* eslint-disable @next/next/no-img-element */
import React from "react";

const AttendBestSchoolCard = ({ data }) => {
  return (
    <div className="w-[700px] h-[600px] m-2 overflow-hidden mx-auto">
      <img
        src="static/books-logo.png"
        alt="book thumbnail"
        className="w-[500px] h-[300px] object-cover"
      />
      <h2 className="font-bold text-center text-blue-900 font-sans mt-5">
        Primary School Name
      </h2>
      <p className="break-words text-gray p-2 font-cursive font-sans mb-2 mt-1">
        Information about the school
      </p>
      <button className="bg-green-500  p-2 ml-1 text-white font-sans mx-auto">
        Get in touch with this school
      </button>
    </div>
  );
};

export default AttendBestSchoolCard;
