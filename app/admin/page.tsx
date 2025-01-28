/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import signIn from "../firebase/signin";
import { useAppContext } from "@/context/global-states";
import { useRouter } from "next/navigation";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAppContext();

  const router = useRouter();

  //to monotor email change
  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
  };

  //to monotor password change
  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      if (email === "" || password === "") {
        alert("Enter all the required fields!");
        setLoading(false);
      }
      const loggedInUser = await signIn(email, password);
      if (loggedInUser) {
            localStorage.setItem("user",loggedInUser.uid)
            console.log("From admin: ",loggedInUser.uid)
            router.push("/dashboard")
      }
      else{
        alert("Invalid admin details!")
        setLoading(false)
      }
    } catch (e) {
      setLoading(false);
      if (e.code === 'auth/wrong-password') {
        alert("Incorrect password. Please try again.");
      } else if (e.code === 'auth/user-not-found') {
        alert("No user found with this email.");
      }
      else if(e.code === 'auth/user-disabled') {
        alert("Your account has been disabled.");
      }
      
    }
  };

 
    return (
      <div className="w-full sm:w-full min-h-screen grid place-content-center bg-gradient-to-b from-blue-200 to-yellow-200">
        <div className="w-[300px] sm:w-[400px] h-[400px] sm:h-[500px]  mx-auto sm:mx-auto bg-white shadow-lg rounded-lg justify-center">
          <img
            src="static/bwi-logo-no-bg.png"
            alt="logo"
            className="w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] mx-auto mt-10"
          />
          <div className="w-full sm:w-full items-center justify-center grid place-content-center">
            <h1 className="text-gray text-xl text-center">
              Sign in as Admin
            </h1>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleEmailInputChange}
              className="border border-teal-200 p-4 rounded-xl w-[250px] sm:w-[300px] mx-auto flex mt-3"
              placeholder="enter your email"
            />
            <input
              type="text"
              name="message"
              value={password}
              onChange={handlePasswordInputChange}
              className="border border-teal-200 p-4 rounded-xl w-[250px] sm:w-[300px] mx-auto flex mt-3"
              placeholder=" enter your password"
            />
            <button
              onClick={handleLogin}
              className="text-white bg-blue-600 rounded-xl p-3 mt-5 "
            >
              {loading ? "LOADING..." : "LOGIN"}
            </button>
            
          </div>
        </div>
      </div>
    );
  
  }
export default Admin;