"use client";
import { useAppContext } from "@/context/global-states";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  

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

  //this checks is user is still loggedin and a language is selected
  // if (user !== null || user !== "" && (language !== "" || language !== null))
  //   redirect("/onboarding");

  return (
    <Link href="/selectLanguage">
      <div className="min-h-screen items-center justify-cente mt-0 pt-0">
        {/* The first section */}
        <div className="relative bg-[url('../static/home-mobile.jpg')] bg-cover bg-center min-w-full min-h-screen sm:bg-[url('../static/home-web.jpg')] sm:bg-cover sm:bg-center sm:w-full sm:h-[800px]">
          
        </div>
      </div>
    </Link>
  );
}
