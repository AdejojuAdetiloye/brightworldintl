/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { getAuth } from "firebase/auth";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import signUserOut from "@/app/firebase/logout";
import { useAppContext } from "@/context/global-states";

const Nav = () => {
  //router for routing
  const router = useRouter();

  //acessing the global state
  const { isLoggedIn, setIsLoggedIn } = useAppContext();

  //to fetch the user
  useEffect(() => {
    const fetchUser = () => {
      const user = localStorage.getItem("user");
      if (user || user !== "" || user !== null || user !== undefined) {
        setIsLoggedIn(true);
      }
      setIsLoggedIn(false)
    };
    fetchUser();
  }, []);

  //state to manage the opening and closing of the menu
  const [isOpen, setIsOpen] = useState(false);

  //to signout/logout
  const handleSignOut = async () => {
    await signUserOut();
    //to remove user from local storage
    localStorage.removeItem("user");
    localStorage.setItem("user","")
    setIsLoggedIn(false);
    alert("You have signed out");
  };

  //method to navigate to login
  const handleLogin = () => {
    router.push("/login");
  };

  //method to open and close menu
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  //methods to handle change of language selected
  const handleEnglishSelected = () => {
    localStorage.removeItem("language")
    localStorage.setItem("language","english");
    setIsOpen(false);
    router.refresh()
    alert("Language changed to English")
  }

  const handleFrenchSelected = () => {
    localStorage.removeItem("language")
    localStorage.setItem("language","french");
    setIsOpen(false);
    router.refresh()
    alert("Language changed to french")
  }

  return (
    <div className="w-full fixed top-0 left-0 z-10 ">
      <nav className="relative navbar w-full fixed top-0 left-0  z-50 bg-white sm:w-full md:w-full  mx-auto items-center justify-between flex shadow-lg p-1">
        {/* logo */}
        <Link href={"/"}>
          <div className="flex flex-row">
            <img
              src="static/company-logo.png"
              alt="logo"
              className="w-[150px] h-[50px] sm:w-[260px] sm:h-[60px] ml-2"
            />
          </div>
        </Link>

        <div className="flex flex-row justify-end items-center  border-8 border-width-8 border-t-2 border-r-2 border-l-0 border-b-2 border-gray-500 w-[110px] h-[50px]">
          <button onClick={isLoggedIn === true ? handleSignOut : handleLogin}>
            <img
              src={`${
                isLoggedIn === true
                  ? "static/logged-in.png"
                  : "static/logged-out.png"
              }`}
              alt="user"
              className="w-8 h-8 mr-3"
            />
          </button>
          <button className="mr-5" onClick={toggleIsOpen}>
            {isOpen ? (
              <AiOutlineClose
                className={`w-8 h-8 ${isOpen && "text-red-500"}`}
              />
            ) : (
              <TiThMenuOutline className="w-8 h-8 text-yellow-400" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className=" absolute w-full  overflow-hidden">
          <div className=" items-center flex-col gap-5 justify-end mr-5 float-right w-[300px] rounded-lg gap-y-3 bg-white shadow-lg">
            <ul className="list-none">
              <button
                onClick={() => {
                  router.push("/onboarding");
                  setIsOpen(false);
                }}
                className="w-[300px] ml-2 mr-2 items-start justify-start"
              >
                <li className=" hover:bg-gray-300 p-2 text-blue-500 font-sans">
                  Go to Home
                </li>
              </button>
              <h4>
                <li className="p-2 text-xl border border-blue-500 mb-2 font-sans ml-2 mr-2 mt-1">
                  Choose Language
                </li>
              </h4>
              <button onClick={handleEnglishSelected} className="w-[300px] p-2 bg-red-500 mb-2  text-white font-sans">
                English
              </button>
              <button onClick={handleFrenchSelected} className="w-[300px] p-2 bg-blue-500 text-white  font-sans">
                French
              </button>

              {isLoggedIn && (
                <>
                  <button
                onClick={() => {
                  router.push("/about");
                  setIsOpen(false);
                }}
                className="w-[300px] ml-2 mr-2 items-start justify-start"
              >
                <li className=" hover:bg-gray-300 p-2 text-blue-500 font-sans">
                  About Us
                </li>
              </button>
              <button
                onClick={() => {
                  router.push("/contact");
                  setIsOpen(false);
                }}
                className="w-[300px] ml-2 mr-2 items-start justify-start"
              >
                <li className=" hover:bg-gray-300 p-2 text-blue-500 font-sans">
                  Contact Us
                </li>
              </button>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
