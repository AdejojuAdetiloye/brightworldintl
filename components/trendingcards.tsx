/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const TrendingBooks = () => {
  return (
    <div className="w-full sm:w-[600px] h-[430px] flex flex-row mb-10">
      <div className="w-[200px] sm:w-[200px] sm:h-[430px] h-[430px] shadow-lg rounded-lg">
        <img
          src="static/books-logo.png"
          alt="book thumbnail"
          className="w-[180px] h-[200px] object-cover"
        />
        <h4 className="font-bold font-serif text-center text-blue-900">
          Practical french for JSS 1 -3
        </h4>
        <p className=" break-words text-gray p-2 font-cursive font-nornal mb-2 mt-1">
          This is the description of the book. is is done so that...
        </p>
        <h5 className="font-bold text-red-500">Get book from our App</h5>
        <button className="bg-green-500 rounded-lg p-1 ml-1 mt-2 w-[180px] text-white">
          Download App
        </button>
      </div>
      <div className="w-[300px] sm:w-[400px] h-[430px] shadow-lg rounded-lg items-center justify-center p-5 pt-10">
        <h3 className="text-blue-950 font-bold font-serif">Get and use this book in PDF with its audio contents within BWI Books App</h3>
        <h3 className="font-bold text-gray-700 mt-3">Other places to get this book in paper or ebook copy/formats:</h3>
        <p className="mt-1 italic">Ikeja,Lagos, Ota,Ogun State,Plateau,Jos,Accra,Ghana</p>
        
        <h3 className="mt-3">Are you interested in selling or distributing this book? <Link href="/message"><span className="font-extrabold border border-white bg-blue-500 pl-2 pr-2 pt-1 pb-1 text-white m-1 rounded-lg ml-2 mt-2"> yes</span></Link></h3>
        <h3 className="text-xl text-blue-950 mt-4">Practical french for JSS 1 -3 </h3>
        <p className=" break-words text-gray p-2 font-cursive font-nornal mb-2 mt-1">
          This is the description of the book. is is done so that...
        </p>

      </div>
    </div>
  );
};

export default TrendingBooks;
