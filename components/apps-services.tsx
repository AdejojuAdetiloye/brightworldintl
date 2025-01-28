"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import OurApps from "./alerts/ourapps/our-apps";
import OurAppsAudioVideo from "./alerts/ourapps/our-apps-audio-video";

const AppsService = ({ language, isOurApps, setIsOurApps, handleApps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAudioVideo, setIsAudioVideo] = useState(false);
  const [isMain, setIsMain] = useState(false);
  const [data, setData] = useState("data");

  const onClose = () => {
    setIsOpen(false);
    setIsMain(false)
    setIsAudioVideo(false);
  };

  //handleUseOurBooks
  const handleUseOurBooks = () => {
    setIsMain(true)
    setIsOpen(true);
    //TODO:set to data state
    setData("Get and use our book");
  };

  //Audio Video Content
  const handleAudioVideoContent = () => {
    setIsAudioVideo(true);
    setIsOpen(true);
    //TODO:set to data state
    setData("Audio Video content");
  };

  //Get courses
  const handleGetCourses = () => {
  };

  if (isOurApps === true) {
    return (
      <div
        className={`w-full h-full sm:w-[240px] sm:h-[500px] shadow-lg  mt-10  p-2 items-center justify`}
      >
        {isMain && <OurApps isOpen={isOpen} onClose={onClose} data={data} />}
        {isAudioVideo && (
          <OurAppsAudioVideo isOpen={isOpen} onClose={onClose} data={data} />
        )}
        <img
          src="static/apps-logo.png"
          alt="books"
          className="sm:w-[240px] sm:h-[200px] cover"
        />
        <h4 className="font-sans font-extrabold mt-2 mb-6 text-2xl text-blue-700 break-words text-center">
          {language === "french" ? "Livres" : "Our Apps"}
        </h4>
        <button
          onClick={handleUseOurBooks}
          className="font-sans font-bold text-blue-500 text-center border border-teal p-1 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500"
        >
          {language === "french"
            ? ""
            : "Buy and Use Our Books With BWI Books App"}
        </button>

        <button
          onClick={handleAudioVideoContent}
          className="font-sans font-bold text-blue-500 text-center border border-teal p-1 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500"
        >
          {language === "french"
            ? ""
            : "Get (For Free) the Audio/video Contents for our Book Which You Have Bought Somewhere"}
        </button>
        <button
          onClick={handleGetCourses}
          className="font-sans font-bold text-green-500 text-center border border-teal p-1 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500"
        >
          {language === "french"
            ? ""
            : "Get Our Classes or Courses in Video Format"}
        </button>
      </div>
    );
  } else {
    return (
      <button
        onClick={handleApps}
        className={`w-full h-full  sm:w-[240px] sm:h-[500px] rounded-lg shadow-lg  sm:cursor-pointer  sm:hover:shadow-lg sm:transition-all sm:duration-200  mt-10  p-2 items-center justify hover:translate-y-10`}
      >
        {language === "english" ? (
          <img
            src="/static/our-apps-english.jpg"
            alt="publishing"
            className="sm:w-[240px] sm:h-[500px] w-full h-full"
          />
        ) : (
          <img
            src="/static/our-apps-french.jpg"
            alt="publishing"
            className="sm:w-[240px] sm:h-[500px] w-full h-full"
          />
        )}
      </button>
    );
  }
};

export default AppsService;
