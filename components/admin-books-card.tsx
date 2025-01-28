import React from "react";

const AdminBooks = () => {
  return (
    <div className="w-full h-[90px] sm:w-[800px] sm:h-[150px] shadow-lg rounded-lg hover:shadow-lg hover:gray-500 hover:translate-y-1 sm:my-10 my-5 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-center">
        {/* Book thumbnail */}
        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] border border-teal sm:ml-5 ml-1  sm:mr-5 mr-1"></div>
        {/* Book title */}
        <div className=" font-bold sm:pl-5 pl-1">
          This is the book title
        </div>
      </div>
      <div className="flex flex-row mr-5">
        <button className="sm:p-3 p-1 bg-yellow-300 hover:bg-yellow-500 rounded-lg text-white sm:mr-2 mr-1">
          EDIT
        </button>
        <button className="sm:p-3 p-1 bg-red-300 hover:bg-red-900 rounded-lg text-white sm:mr-2 mr-1">
          DELETE
        </button>
      </div>
    </div>
  );
};

export default AdminBooks;
