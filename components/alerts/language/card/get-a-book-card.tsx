/* eslint-disable @next/next/no-img-element */
import React from "react";

const GetABookCard = ({ isOpen, onClose, data }) => {
  return (
    <div className="w-[500px] h-[400px]  m-2 p-3 text-center justify-center">
      <h1 className="font-semibold  text-blue-900 font-sans text-xl mb-3 italic">
        With us, get quality translation done of different type of texts or
        documents ranging from product user notice/manual, books, letters,
        memoranda/agreements,subtitles of movies and documentaries etc
      </h1>

      <h1 className="font-semibold  text-blue-900 font-sans text-xl mt-3 mb-3 italic">
        Whatever category your document may fall into, we deliver an excellent
        translation of it within a minimum of two(2) weeks, depending on the
        number of pages, in the categories such as literal translation
        <span className="font-extrabold font-sans">(at $20 - $25 per page)</span>
      </h1>
    </div>
  );
};

export default GetABookCard;
