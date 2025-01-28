import TextBooksCards from "@/components/textbooks-cards";
import TrendingBooks from "@/components/trendingcards";
import React from "react";

const ProductDetails = () => {
  return (
    <div className="w-full sm:w-full min-h-screen pt-20 pl-5">
      {/* TextBooks Section */}
      <h1 className=" sm:text-3xl text-xl text-gray-700 pl-5 font-serif font-extrabold pt-20">
        TextBooks
      </h1>
      <div className="w-full sm:w-full pt-10 grid grid-cols-2 sm:grid-cols-6">
        <TextBooksCards />
        <TextBooksCards />
        <TextBooksCards />
        <TextBooksCards />
        <TextBooksCards />
        <TextBooksCards />
      </div>
      {/* Self Development Books Section */}
      <h1 className=" sm:text-3xl text-xl text-gray-700 pl-5 font-serif font-extrabold pt-20">
        Self Development Books
      </h1>
      <div className="w-full sm:w-full pt-10 grid grid-cols-2 sm:grid-cols-6">
        <TextBooksCards />
        <TextBooksCards />
        <TextBooksCards />
        <TextBooksCards />
        <TextBooksCards />
        <TextBooksCards />
      </div>
      {/* TrendingBooks Section */}
      <h1 className=" sm:text-3xl text-xl text-gray-700 pl-5 font-serif font-extrabold pt-20">
        Trending Books
      </h1>
      <div className="w-full sm:w-[1440px] pt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 mx-auto">
        <TrendingBooks />
        <TrendingBooks />
        <TrendingBooks />
      </div>
    </div>
  );
};

export default ProductDetails;
