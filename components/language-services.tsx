"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import GetInterpretationCard from "./alerts/language/card/get-interpretation-card";
import GetInterPretation from "./alerts/language/get-live-interpretation";
import GetABook from "./alerts/language/get-a-book";
import GetTextRead from "./alerts/language/get-text-read";

const LanguageServices = ({
  language,
  isLanguageService,
  setIsLanguageService,
  handleLanguageService,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMain,setIsMain] = useState(false)
  const [isInterpret, setIsInterpret] = useState(false);
  const [isReadText, setIsReadText] = useState(false);
  const [data,setData] = useState([]);

  const onClose = () => {
    setIsOpen(false);
    setIsInterpret(false)
    setIsReadText(false)
    setIsMain(false)

  };

  //For get translation
  const handleGetTranslation = () => {
    setIsMain(true)
    setIsOpen(true);
    //TODO:set the textbooks data to data state
   
  };

  //For Self development books
  const handleGetInterpretation = () => {
    setIsInterpret(true)
    setIsOpen(true);
  };

  //For bright practical french
  const handleGetTextRead = () => {
    setIsInterpret(true)
    setIsOpen(true);
  };

  //For langlais en pratique
  const handleGetTranscription = () => {
    
  };

  if (isLanguageService === true) {
    return (
      <div
        className={`w-full h-full sm:w-[240px] sm:h-[500px] shadow-lg  mt-10  p-2 items-center justify`}
      >
        {isMain && <GetABook isOpen={isOpen} onClose={onClose} data={data} />}
        {isInterpret && <GetInterPretation isOpen={isOpen} onClose={onClose} data={data} />}
        {isReadText && <GetTextRead isOpen={isOpen} onClose={onClose} data={data} />}
        <img
          src="static/language-logo.png"
          alt="language"
          className="sm:w-[240px] sm:h-[200px] cover"
        />
        <h4 className="font-sans font-extrabold mt-2 mb-6 text-2xl text-blue-700 break-words text-center">
          {language === "french" ? "" : "Language Services"}
        </h4>
        <button
          onClick={handleGetTranslation}
          className="font-sans font-bold text-blue-500 text-center border border-teal p-2 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500"
        >
          {language === "french"
            ? ""
            : "Get a Book, Document or Text Translated "}
        </button>

        <button
          onClick={handleGetInterpretation}
          className="font-sans font-bold text-blue-500 text-center border border-teal p-2 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500"
        >
          {language === "french" ? "" : "Get Live Interpretaon"}
        </button>
        <button
          onClick={handleGetTextRead}
          className="font-sans font-bold text-blue-500 text-center border border-teal p-2 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500"
        >
          {language === "french" ? "" : "Get a Text Read"}
        </button>
        <button
          onClick={handleGetTranscription}
          className="font-sans font-semibold text-green-500 text-center border border-teal p-2 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto"
        >
          {language === "french"
            ? ""
            : "Get That Audio/Video Voice Transcribed into Text"}
        </button>
      </div>
    );
  } else {
    return (
      <button
        onClick={handleLanguageService}
        className={`w-full h-full  sm:w-[240px] sm:h-[500px] rounded-lg shadow-lg  sm:cursor-pointer  sm:hover:shadow-lg sm:transition-all sm:duration-200  mt-10  p-2 items-center justify hover:translate-y-10`}
      >
        {language === "english" ? (
          <img
            src="/static/language-serv-english.jpg"
            alt="books-image"
            className="sm:w-[240px] sm:h-[500px] w-full h-full"
          />
        ) : (
          <img
            src="/static/language-serv-french.jpg"
            alt="books-image"
            className="sm:w-[240px] sm:h-[500px] w-full h-full"
          />
        )}
      </button>
    );
  }
};

export default LanguageServices;
