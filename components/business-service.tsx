"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import GetBookAlertCards from "./alerts/textbooks/cards/getBookCard";
import ProposeBusiness from "./alerts/business/propose-a-business";
import WhatCanYouDo from "./alerts/business/what-can-you-do";
import Invest from "./alerts/business/invest";

const BusinessService = ({
  language,
  isBusiness,
  setIsBusiness,
  handleBusiness,
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isMain, setIsMain] = useState(false);
  const [isOther,setIsOther] = useState(false);
  const [isWhat,setIsWhat] = useState(false);
  const [isInvest,setIsInvest] = useState(false);
  const [data, setData] = useState("data");

  const onClose = () => {
    setIsOpen(false);
    setIsOther(false)
    setIsWhat(false)
    setIsMain(false)
    setIsInvest(false)
  };

   //propose a business
   const handleProposeBusiness = () =>{
    setIsOpen(true)
    setIsMain(true)
    //TODO:set to data state
    setData("Propose a business")
  }

  //What can you do for us
  const handleWhatCanYouDo = () => {
    setIsWhat(true)
    setIsOpen(true)
    //TODO:set  to data state
    setData("What can you do for us")
  }

  //invest in the programme
  const handleInvest = () => {
    setIsOpen(true)
    setIsInvest(true)
    //TODO:set to data state
    setData("invest in the programme")
  }

  

  if (isBusiness === true) {
    return (
      <div
        className={`w-full h-full sm:w-[240px] sm:h-[500px] shadow-lg  mt-10  p-2 items-center justify`}
      >
        
        {isMain && <ProposeBusiness isOpen={isOpen} onClose={onClose} data={data} />}
        { isOther && <GetBookAlertCards isOpen={isOpen} onClose={onClose} data={data} />}
        {isWhat && <WhatCanYouDo isOpen={isOpen} onClose={onClose} data={data} />}
        { isInvest && <Invest isOpen={isOpen} onClose={onClose} data={data} />}

        <img
          src="static/business-logo.png"
          alt="business"
          className="sm:w-[240px] sm:h-[200px] cover"
        />
        <h4 className="font-sans font-extrabold mt-2 mb-6 text-2xl text-blue-700 break-words text-center">
          {language === "french" ? "" : "Business, Job,Commerce & Investment"}
        </h4>
        <button
        onClick={handleProposeBusiness}
          className="font-sans font-bold text-blue-500 text-center border border-teal p-2 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500"
        >
          {language === "french" ? "" : "Propose a Business"}
        </button>

        <button
        onClick={handleWhatCanYouDo}
        className="font-sans font-bold text-blue-500 text-center border border-teal p-2 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500">
          {language === "french" ? "" : "What Can You Do for Us?"}
        </button>
        <button
        onClick={handleInvest}
        className="font-sans font-bold text-blue-500 text-center border border-teal p-2 sm:w-[240px] w-full ml-5 mr-5 sm:mx-auto hover:bg-yellow-500 hover:text-white-500">
          {language === "french" ? "" : "Invest In to be a Part of This Organizaon"}
        </button>
      </div>
    );
  } else {
    return (
      <button
        onClick={handleBusiness}
        className={`w-full h-full  sm:w-[240px] sm:h-[500px] rounded-lg shadow-lg  sm:cursor-pointer  sm:hover:shadow-lg sm:transition-all sm:duration-200  mt-10  p-2 items-center justify hover:translate-y-10`}
      >
        {language === "english" ? (
          <img
            src="/static/business-english.jpg"
            alt="publishing"
            className="sm:w-[240px] sm:h-[500px] w-full h-full"
          />
        ) : (
          <img
            src="/static/business-french.jpg"
            alt="publishing"
            className="sm:w-[240px] sm:h-[500px] w-full h-full"
          />
        )}
      </button>
    );
  }
};

export default BusinessService;
