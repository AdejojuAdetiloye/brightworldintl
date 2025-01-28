/* eslint-disable @next/next/no-img-element */
import React from "react";

const GetCoursesCard = ({data}) => {
  return (
    <div className="w-[200px] h-[300px] shadow-lg border border-teal rounded-lg m-2 overflow-hidden">
  <img
    src="static/books-logo.png"
    alt="book thumbnail"
    className="w-[180px] h-[130px] object-cover mx-auto"
  />
  <h2 className="font-bold text-center text-blue-900 font-sans">
    CourseTitle
  </h2>
  <p className="break-words text-gray p-2 font-cursive font-sans mb-2 mt-1">
    This is the description of the course. It is designed so that...
  </p>
  <button className="bg-green-500  p-2 ml-5 w-[150px] text-white font-sans">
    Get this Course
  </button>
</div>

  );
};

export default GetCoursesCard;
