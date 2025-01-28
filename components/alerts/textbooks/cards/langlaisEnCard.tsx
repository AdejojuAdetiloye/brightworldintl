/* eslint-disable @next/next/no-img-element */
import React from "react";
import AlertCards from "./alert-cards";

const LanglaisEnCard = ({ isOpen, onClose, data }) => {
  return (
    <div className="w-[800px] h-[600px]  m-2 p-3">
      <h1 className="font-bold  text-blue-900 font-sans text-xl mb-3">
        Get and use this book in PDF with its audio contents within the BWI
        Books App
      </h1>
      <h2 className="font-sans font-bold mb-2">
        Other places to get this book in paper or ebook copy/formats
      </h2>

      <ul className="mb-2">
        <h2 className="font-sans font-semibold">
          <li>ota,ogun state</li>
        </h2>
        <h2 className="font-sans font-semibold">
          <li>ikeja, Lagos</li>
        </h2>
        <h2 className="font-sans font-semibold">
          <li>p.Harcort, Rivers</li>
        </h2>
        <h2 className="font-sans font-semibold">
          <li>Accra, Ghana</li>
        </h2>
      </ul>

      <h2 className="font-sans font-bold text-green-500 mb-2">
        Are you interested in selling or distributing this book?
      </h2> 
      <button className="p-2 w-[200px] h-[40px] bg-purple border border-blue-700 bg-gradient-to-r from-blue-500 to-yellow-500  text-white font-sans mt-5">
        YES
      </button>
      <AlertCards data={data} />
    </div>
  );
};

export default LanglaisEnCard;
