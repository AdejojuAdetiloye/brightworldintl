"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import LearnPracticalFrench from "./alerts/learning/learn-practical-french";
import AttendBestSchool from "./alerts/learning/attend-best-school";
import GetCourses from "./alerts/learning/get-courses";

const LearningService = ({
  language,
  isLearning,
  setIsLearning,
  handleLearning,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [data, setData] = useState("data");
  const [isLearnPracticalFrench, setIsLearnPracticalFrench] = useState(false);
  const [isAttend, setIsAttend] = useState(false);
  const [isGetCourse, setIsGetCourse] = useState(false);


  const onClose = () => {
    setIsOpen(false);
    setIsLearnPracticalFrench(false)
    setIsAttend(false)
    setIsGetCourse(false)
  };

  //learn practical french
  const handleLearnPracticalFrench = () =>{
    setIsLearnPracticalFrench(true)
    setIsOpen(true)
    //TODO:set learn practical french data state
    
  }

  //Attend the best school
  const handleAttendTheBestSchool = () => {
    setIsAttend(true)
    setIsOpen(true)
    //TODO:set attend the best school data state
    setData("Attend the best school")
  }

  //Attend a training center
  const handleAttendTrainingCenter = () => {
   
  }

   //For get our clases
   const handleGetClasses = () => {
    setIsGetCourse(true)
    setIsOpen(true)
    //TODO:set get classes to data state
    setData("Get our clases")
  }

  if (isLearning === true) {
    return (
      <div
      className={`w-full h-full sm:w-[240px] sm:h-[500px] shadow-lg  mt-10  p-2 items-center justify`}
    >
       {isLearnPracticalFrench && <LearnPracticalFrench isOpen={isOpen} onClose={onClose} data={data} />}
       {isAttend && <AttendBestSchool isOpen={isOpen} onClose={onClose} data={data} />}
       {isGetCourse && <GetCourses isOpen={isOpen} onClose={onClose} data={data} />}

      <img
        src="static/learning-logo.png"
        alt="books"
        className="sm:w-[240px] sm:h-[190px] cover"
      />
      <h4 className="font-sans font-extrabold mt-2 mb-6 text-2xl text-blue-700 break-words text-center">
        {language === "french" ? "" : "Education"}
      </h4>
      <button onClick={handleLearnPracticalFrench}
        className="font-sans font-bold text-blue-500 text-center border border-teal p-1 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500"
      >
        {language === "french" ? "" : "Learn Practical French"}
      </button>
      <button onClick={handleAttendTheBestSchool}
        className="font-sans font-bold text-blue-500 text-center border border-teal p-1 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500"
      >
        {language === "french" ? "" : "Attend the best School"}
      </button>
      <button onClick={handleAttendTrainingCenter} className="font-sans font-bold text-blue-500 text-center border border-teal p-1 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500">
        {language === "french" ? "" : "Attend a Training Centre"}
      </button>
      <button onClick={handleGetClasses} className="font-sans font-bold text-blue-500 text-center border border-teal p-1 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500">
        {language === "french" ? "" : "Get Our Classes or Courses in Video Format"}
      </button>
      <p className="font-sans text-blue-500 text-center border border-teal p-1 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto">
        {language === "french" ? "" : "Take a Coaching (for an Examinaon or Test/Improving Your Performance in School)"}
      </p>
      
    </div>
    );
  } else {
    return (
      <button
        onClick={handleLearning}
        className={`w-full h-full  sm:w-[240px] sm:h-[500px] rounded-lg shadow-lg  sm:cursor-pointer  sm:hover:shadow-lg sm:transition-all sm:duration-200  mt-10  p-2 items-center justify hover:translate-y-10`}
      >
        {language === "english" ? (
          <img
            src="/static/education-english.jpg"
            alt="learning"
            className="sm:w-[240px] sm:h-[500px] w-full h-full"
          />
        ) : (
          <img
            src="/static/education-french.jpg"
            alt="learning"
            className="sm:w-[240px] sm:h-[500px] w-full h-full"
          />
        )}
      </button>
    );
  }
};

export default LearningService;
