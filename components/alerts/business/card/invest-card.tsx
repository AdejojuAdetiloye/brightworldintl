/* eslint-disable @next/next/no-img-element */
import React from "react";

const InvestCard = ({ isOpen, onClose, data }) => {
  return (
    <div className="w-[500px] h-[400px]  m-2 p-3 text-center justify-center">
      <h1 className="font-bold  text-blue-900 font-sans text-xl mb-3 italic">
        Investment Opportunities
      </h1>

      <h1 className="font-semibold  text-blue-900 font-sans text-xl mt-3 mb-3 italic">
        You can invest money for profit into BrightWorld International if your
        purpose is just to make money,or if you are strongly interested in our
        vision in a way that you want to be part of it.
      </h1>
      <h1 className="font-semibold  text-blue-900 font-sans text-xl mt-3 mb-3 italic">
        Out of a Strong interest in our Vision, you may think of supporting us
        by investing your money into BrightWorld International.
      </h1>
    </div>
  );
};

export default InvestCard;
