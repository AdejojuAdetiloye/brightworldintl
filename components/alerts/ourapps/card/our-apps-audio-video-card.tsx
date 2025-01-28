/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const OurAppsAudioVideoCard = ({ data }) => {
  return (
    <div className="w-[500px] h-[400px]  m-2 p-3 text-center justify-center mx-auto">
      <Link
        href={""}
        className=" border border-teal bg-gradient-to-r from-blue-500 to-yellow-500 mb-5 p-2 w-[200px] font-sans font-bold text-white"
      >
        Install BWI Media
      </Link>
      <h1 className="font-semibold  text-blue-900 font-sans text-xl mb-3 italic mt-5">
        Download the BWI Media app and follow the instructions within it to get
        the Playlist of the audio or video content for the book you have bought
      </h1>
      <h1 className="text-2xl font-bold font-sans text-blue-900">FAQ</h1>
      <h1 className="font-semibold  text-blue-900 font-sans text-xl mb-3 italic">
        How do I access and download the app?
      </h1>
    </div>
  );
};

export default OurAppsAudioVideoCard;
