/* eslint-disable @next/next/no-img-element */
"use client";
import { useAppContext } from "@/context/global-states";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SelectLanguage = () => {
  //for managing routes
  const router = useRouter();

  //state managing the selected language
  const { language, setLanguage, user, setUser } = useAppContext();

  //to fetch the language
  useEffect(() => {
    const fetchLanguage = async () => {
      const res = await localStorage.getItem("language");
      if (res) {
        setLanguage(res);
      } else if (res === null || res === "") {
        setLanguage("");
      }
    };
    fetchLanguage();
  }, [language]);

  //to fetch the user
  useEffect(() => {
    const fetchUser = async () => {
      const res = await localStorage.getItem("user");
      if (res) {
        setUser(res);
      } else if (res === null || res === "") {
        setUser(null);
      }
    };
    fetchUser();
  }, [user]);


  //on select french
  const selectFrench = () => {
    localStorage.setItem("language", "french");
    setLanguage("french");
    router.replace("/onboarding");
  };

  //on select english
  const selectEnglish = () => {
    localStorage.setItem("language", "english");
    setLanguage("english");
    router.replace("/onboarding");
  };

  return (
    <div>
      {/* The Second section */}
      <div className="relative bg-[url('../static/selectlang-mobile.jpg')] bg-cover bg-center min-w-full min-h-screen sm:bg-[url('../static/selectlang-web.jpg')] sm:bg-cover sm:bg-center sm:w-full sm:h-[800px]">
        <div>
          {/* select french */}
          <div className="flex flex-row pt-[770px] sm:pt-[600px] w-full sm:w-full">
            <div className=" sm:w-[745px] w-[0px]"></div>
            <div className="flex flex-row sm:w-[745px] w-full sm:pl-[150px]">
              <div className="sm:w-12 sm:h-12 w-6 h-6 pr-1 mr-2">
                <img
                  src="/static/french-logo.png"
                  alt="french-logo"
                  className="bg-cover sm:w-12 w-6 sm:h-12 h-6"
                />
              </div>
              <div>
                <button onClick={selectFrench} className="sm:text-4xl text-xl font-bold font-serif italic text-slate-100 hover:text-blue-950">
                  Contineuz en Francais
                </button>
              </div>
              <div className="sm:w-10 w-6 h-5 sm:ml-2 ml-1">
                <img
                  src="/static/arrow.png"
                  alt="french-logo"
                  className="bg-cover sm:w-12 w-6 h-5 sm:h-12"
                />
              </div>
            </div>
          </div>
           {/* select english */}
           <div className="flex flex-row mt-[50px] sm:mt-0 sm:pt-[40px] w-full sm:w-full">
            <div className=" sm:w-[745px] w-[0px]"></div>
            <div className="flex flex-row  sm:w-[745px] w-full sm:pl-[150px]">
              <div className="sm:w-12 sm:h-12 w-6 h-6 pr-1 mr-2">
                <img
                  src="/static/english-logo.png"
                  alt="french-logo"
                  className="bg-cover sm:w-12 w-6 sm:h-12 h-6"
                />
              </div>
              <div>
                <button onClick={selectEnglish} className="sm:text-4xl text-xl font-bold font-serif italic text-slate-100 hover:text-blue-950">
                  Continue in English
                </button>
              </div>
              <div className="sm:w-10 w-6 h-5 sm:ml-2 ml-1">
                <img
                  src="/static/arrow.png"
                  alt="farrow"
                  className="bg-cover sm:w-12 w-6 h-5 sm:h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectLanguage;
