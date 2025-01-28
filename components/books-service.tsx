"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import AlertDialog from "./alerts/textbooks/textbook-alert-dialog";
import TextBookGetBookAlertDialog from "./alerts/textbooks/get-this-book";
import LanglaisEnPratique from "./alerts/textbooks/langlais-en-pratique";
import AudioVideoContent from "./alerts/textbooks/audio-video";

const BookService = ({ language, isBook, handleBook, setIsBook }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMain, setIsMain] = useState(false);
  const [isGetBook, setIsGetBook] = useState(false);
  const [isLanglais, setIsLanglais] = useState(false);
  const [isAudioVideo, setIsAudioVideo] = useState(false);
  const [data, setData] = useState(null);

  

  const onClose = () => {
    setIsOpen(false);
    setIsMain(false)
    setIsGetBook(false);
    setIsLanglais(false);
    setIsAudioVideo(false);
  };

  //For textBook selected
  const handleTextBook = async () => {
    setIsMain(true)
    setIsOpen(true);
    //TODO:set the textbooks data to data state
   
  };

  //For Self development books
  const handleSelfDevBook = () => {
    setIsMain(true)
    setIsOpen(true);
    //TODO:set self development books to data state
    //setData("Self development Books");
  };

  //For bright practical french
  const handleBrightPracticalFrench = () => {
    setIsGetBook(true);
    setIsOpen(true);
    //TODO:set brightpractical books to data state
    //setData("bright practical french");
  };

  //For langlais en pratique
  const handleLanglaisEnPratique = () => {
    setIsLanglais(true);
    setIsOpen(true);
    //TODO:set langlais en pratique books to data state
    //setData("langlais en pratique");
  };

  //For Audio Video
  const handleAudioVideo = () => {
    setIsAudioVideo(true);
    setIsOpen(true);
    //TODO:set audio video to data state
    //setData("Audio Video");
  };

  if (isBook === true) {
    return (
      <div
        className={`w-full h-full sm:w-[240px] sm:h-[500px] shadow-lg  mt-10  p-2 items-center justify`}
      >
        {isMain && <AlertDialog isOpen={isOpen} onClose={onClose} data={data} />}
        {isGetBook && (
          <TextBookGetBookAlertDialog
            isOpen={isOpen}
            onClose={onClose}
            data={data}
          />
        )}
        {isLanglais && (
          <LanglaisEnPratique isOpen={isOpen} onClose={onClose} data={data} />
        )}
        {isAudioVideo && (
          <AudioVideoContent isOpen={isOpen} onClose={onClose} data={data} />
        )}

        <img
          src="static/books-logo.png"
          alt="books"
          className="sm:w-[240px] sm:h-[190px] cover"
        />
        <h4 className="font-sans font-extrabold mt-2 mb-6 text-2xl text-blue-700 break-words text-center">
          {language === "french" ? "Livres" : "Books"}
        </h4>
        <button
          onClick={handleTextBook}
          className="font-sans font-bold text-blue-500 text-center border border-teal p-2 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500"
        >
          {language === "french" ? "" : "Textbooks"}
        </button>

        <button
          onClick={handleSelfDevBook}
          className="font-sans font-bold text-blue-500 text-center border border-teal p-2 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500"
        >
          {language === "french" ? "" : "Self Development Books"}
        </button>
        <button
          onClick={handleBrightPracticalFrench}
          className="font-sans font-bold text-blue-500 text-center border border-teal p-2 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500"
        >
          {language === "french" ? "" : "Bright Practical French "}
        </button>
        <button
          onClick={handleLanglaisEnPratique}
          className="font-sans font-bold text-blue-500 text-center border border-teal p-2 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500"
        >
          {language === "french" ? "" : "L’anglais En Pratique"}
        </button>
        <button
          onClick={handleAudioVideo}
          className="font-sans font-bold text-blue-500 text-center border border-teal p-2 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500"
        >
          {language === "french" ? "" : "Audio/video Contents for our Books"}
        </button>
      </div>
    );
  } else {
    return (
      <button
        onClick={handleBook}
        className={`w-full h-full  sm:w-[240px] sm:h-[500px] rounded-lg shadow-lg  sm:cursor-pointer  sm:hover:shadow-lg sm:transition-all sm:duration-200  mt-10  p-2 items-center justify hover:translate-y-10`}
      >
        {language === "english" ? (
          <img
            src="/static/books-english.jpg"
            alt="books-image"
            className="sm:w-[240px] sm:h-[500px] w-full h-full"
          />
        ) : (
          <img
            src="/static/books-french.jpg"
            alt="books-image"
            className="sm:w-[240px] sm:h-[500px] w-full h-full"
          />
        )}
      </button>
    );
  }
};

export default BookService;
