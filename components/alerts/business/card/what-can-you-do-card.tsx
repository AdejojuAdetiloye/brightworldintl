/* eslint-disable @next/next/no-img-element */
import React from "react";

const WhatCanYouDoCard = ({ isOpen, onClose, data }) => {
  return (
    <div className="w-[500px] h-[400px]  m-2 p-3 text-center justify-center">
      <h1 className="font-semibold  text-blue-900 font-sans text-xl mt-3 mb-3 italic">
        Whatever your discipline, interest or line of work, there is always a
        place for mutual-benefit partnership or employment opportunities for you
        in BrightWorld International. According to your inspiration while you
        are exploring us, tell us what you can do with or for us!
      </h1>
    </div>
  );
};

export default WhatCanYouDoCard;
