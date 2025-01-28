import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-full bg-blue-900 shadow-lg h-[300px] mt-20">
      <div className="w-full sm:w-full md:w-full lg:w-full h-[300px] pt-10 ">
        <div className="ml-10 flex flex-row items-start justify-between">
          <h3 className="text-slate-100 font-sans font-bold text-xl ">
            Contact Us
          </h3>
          <div className="mt-2 flex flex-row">
            <div className="p-3 m-3">
              <Link
                href="/message"
                className=" p-3 rounded-lg border border-white"
              >
                <span className="text-white font-semibold font-sans sm:p-3 p-1 rounded-lg ">
                  Leave a Message
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="ml-10">
          <div className="flex flex-row ">
            <div>
              <p className="font-bold text-white font-sans">Tel No:</p>
            </div>
            <div>
              <p className="font-bold text-white pl-2 font-sans">
                (+234 802 239 0988, +229 62 39 97 13)
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-5">
            <div className="p-3">
              <span className="text-green-500">
                <FaWhatsapp className="w-8 h-8" />
              </span>
            </div>
            <div className="p-3">
              <span className="text-white">
                <FaFacebook className="w-8 h-8" />
              </span>
            </div>
            <div className="p-3">
              <span className="text-black">
                <FaXTwitter className="w-8 h-8" />
              </span>
            </div>
            <div className="p-3">
              <span className="text-pink">
                <BsInstagram className="w-8 h-8" />
              </span>
            </div>
          </div>
          <div className="sm:mb-5 mb-5">
            <p className="mt-2 p-2 text-white font-normal font-sans">
              Brightworldintl Copywright 2024. Idiroko road, ota, ogun state
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
