/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import signUp from "../firebase/signup";
import { useAppContext } from "@/context/global-states";
import { useRouter } from "next/navigation";
import { FiAlertCircle } from "react-icons/fi";

const Register = () => {
  const { user, setUser } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  //to handle email input changes
  const handleEmailInputChange = (event) => {
    setEmail(event.target.value); 
  };
//to handle password input change
const handlePasswordInputChange = (event) => {
  setPassword(event.target.value); 
};

//to handle confirm password change
const handleConfirmPasswordInputChange = (event) => {
  setConfirmPassword(event.target.value); 
};

  const handleSignUp = async () => {
    try {
      setLoading(true);
      if (email === "" || password === "" || confirmPassword ==="" || password !== confirmPassword) {
        alert("Enter all the required and Correct fields!");
        setLoading(false);
      }
      const res = await signUp(email, password);
      if(res){
        setLoading(false)
        router.push("/login")
      }
    } catch (e) {
      if (e.code === 'auth/email-already-in-use') {
        alert("This email is already in use. Please try another.");
      }
      else if (e.code === 'auth/weak-password') {
        alert("The password should be at least 6 characters.");
      }
      else if (e.code === 'auth/invalid-email') {
        alert("Please enter a valid email address.");
      }
      
      setLoading(false)
    }
  };

  return (
    <div className="w-full sm:w-full min-h-screen grid place-content-center bg-gradient-to-b from-blue-200 to-yellow-200">
      <div className="w-[300px] sm:w-[400px] h-[450px] sm:h-[500px]  mx-auto sm:mx-auto bg-white shadow-lg rounded-lg justify-center">
        <img
          src="static/bwi-logo-no-bg.png"
          alt="logo"
          className="w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] mx-auto mt-10"
        />
        <div className="w-full sm:w-full items-center justify-center grid place-content-center">
          <h1 className="text-gray text-xl text-center">
            Hello! its nice having you
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
            name="password"
            value={password}
            onChange={handlePasswordInputChange}
            className="border border-teal-200 p-4 rounded-xl w-[250px] sm:w-[300px] mx-auto flex mt-3"
            placeholder="password"
          />
          <input
            type="text"
            name="confirmpassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordInputChange}
            className="border border-teal-200 p-4 rounded-xl w-[250px] sm:w-[300px] mx-auto flex mt-3"
            placeholder="confirm password"
          />
          <button
            onClick={handleSignUp}
            className="text-white bg-blue-600 rounded-xl p-3 mt-5 "
          >
            {loading ? "LOADING..." : "SIGN UP"}
          </button>
          <Link href="/login">
            <p className="text-right mr-5 mt-3 font-bold">
              Already have account? <span className="text-blue-600">Login</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
