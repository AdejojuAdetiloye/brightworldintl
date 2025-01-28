"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import PublishingAlert from "./alerts/publishing/publishing-alert";

const PublishingService = ({
  language,
  isPublishing,
  setIsPublishing,
  handlePublishing,
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState("data");

  const onClose = () => {
    setIsOpen(false);
  };

 //Get book written for you
 const handleGetABookWritten = () =>{
  setIsOpen(true)
  //TODO:set to data state
  setData("get book written for you")
}

//Edit manuscript
const handleEditManuscript = () => {
  setIsOpen(true)
  //TODO:set to data state
  setData("Edit manuscript")
}

//produce/print a book
const handlePrintBook = () => {
  
}

 //handle get book published
 const handleGetBookPublished = () => {
  
}


  if (isPublishing === true) {
    return (
      <div
        className={`w-full h-full sm:w-[240px] sm:h-[500px] shadow-lg  mt-10  p-2 items-center justify`}
      >
        <PublishingAlert isOpen={isOpen} onClose={onClose} data={data} />
        <img
          src="static/publish-logo.png"
          alt="books"
          className="sm:w-[240px] sm:h-[180px] cover"
        />
        <h4 className="font-sans font-extrabold mt-2 mb-6 text-2xl text-blue-700 break-words text-center">
          {language === "french" ? "" : "Publishing & Printing"}
        </h4>
        <button
        onClick={handleGetABookWritten}
          className="font-sans font-bold text-blue-500 text-center border border-teal p-1 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500"
        >
          {language === "french" ? "" : "Get a Book Written or Typeset For Publishing"}
        </button>

        <button 
        onClick={handleEditManuscript}
        className="font-sans font-bold text-blue-500 text-center border border-teal p-1 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500">
          {language === "french" ? "" : "Edit a Manuscript For Publishing"}
        </button>
        <button
        onClick={handlePrintBook}
        className="font-sans font-bold text-green-500 text-center border border-teal p-1 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto">
          {language === "french" ? "" : "Produce/Print a Book"}
        </button>
        <button 
        onClick={handleGetBookPublished}
        className="font-sans font-bold text-green-500 text-center border border-teal p-1 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto">
          {language === "french" ? "" : "Get Your Exisng Book Re-published by Us"}
        </button>
      </div>
    );
  } else {
    return (
      <button
        onClick={handlePublishing}
        className={`w-full h-full  sm:w-[240px] sm:h-[500px] rounded-lg shadow-lg  sm:cursor-pointer  sm:hover:shadow-lg sm:transition-all sm:duration-200  mt-10  p-2 items-center justify hover:translate-y-10`}
      >
        {language === "english" ? (
          <img
            src="/static/publishing-english.jpg"
            alt="publishing"
            className="sm:w-[240px] sm:h-[500px] w-full h-full"
          />
        ) : (
          <img
            src="/static/publishing-french.jpg"
            alt="publishing"
            className="sm:w-[240px] sm:h-[500px] w-full h-full"
          />
        )}
      </button>
    );
  }
};

export default PublishingService;
