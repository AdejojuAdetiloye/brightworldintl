/* eslint-disable @next/next/no-img-element */
import React from "react";

const Message = ({ email, onChange,message,onChangeMessage }) => {
  return (
    <div className="w-full sm:w-full min-h-screen grid place-content-center bg-gradient-to-b from-blue-200 to-yellow-200">
      <div className="w-[300px] sm:w-[400px] h-[400px] sm:h-[500px]  mx-auto sm:mx-auto bg-white shadow-lg rounded-lg justify-center">
        <img
          src="static/bwi-logo-no-bg.png"
          alt="logo"
          className="w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] mx-auto mt-10"
        />
        <div className="w-full sm:w-full items-center justify-center grid place-content-center">
            <h1 className="text-gray text-xl text-center">Leave us a message</h1>
          <input
            type="text"
            name="email"
            value={email}
            onChange={onChange}
            className="border border-teal-200 p-4 rounded-xl w-[250px] sm:w-[300px] mx-auto flex mt-3"
            placeholder="enter your email"
          />
          <input
            type="text"
            name="message"
            value={message}
            onChange={onChangeMessage}
            className="border border-teal-200 p-4 rounded-xl w-[250px] sm:w-[300px] mx-auto flex mt-3 h-[100px]"
            placeholder="message"
          />
          <button className="text-white bg-blue-600 rounded-xl p-3 mt-5 ">SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
