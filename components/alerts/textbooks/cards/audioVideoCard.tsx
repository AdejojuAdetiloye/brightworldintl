/* eslint-disable @next/next/no-img-element */
import React from "react";

const AudioVideoCard = ({ isOpen, onClose, data }) => {
  return (
    <div className="w-[600px] h-[400px]  m-2 p-3">
      <h1 className="font-bold  text-blue-900 font-sans text-xl mb-3">
        Install the BWI Media App and follow the instructions within it to get
        the playlist of the audio or video contents for the book you have bought
      </h1>
      <button className="p-2 w-[200px] h-[40px] bg-purple border border-blue-700 bg-gradient-to-r from-blue-500 to-yellow-500  text-white font-sans mt-5">
        Install BWI Media
      </button>
      <h1 className="font-sans font-bold text-xl mt-10">Frequently Asked Questions</h1>
      <h2 className="font-sans font-bold mt-2">
        How do i download the audio or video content for the book which i
        bought?
      </h2>
      <h2 className="font-sans font-bold mt-2">
        How/Where do I get my product?
      </h2>
    </div>
  );
};

export default AudioVideoCard;
