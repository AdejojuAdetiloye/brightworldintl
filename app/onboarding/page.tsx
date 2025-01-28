"use client"
import HomeTop from "@/components/home-top";
import ServicesCard from "@/components/services-card";
import { useEffect, useState } from "react";


export default function Onboarding() {
  const [data,setData] = useState([])

//accessing language from localStorage
  const language = localStorage.getItem("language")

  //method to load items from namecheap
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch('/api/getBooks', {
  //         method: 'GET', // Ensure the method matches what the API route supports
  //       });
  
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  
  //       const result = await response.json();
  //       setData(result)
  //       console.log('Books:', data);
  //     } catch (error) {
  //       console.error('Failed to fetch books:', error);
  //     }
    
  //   }

  //   fetchData();
  // }, []);
    
    return (
      <div className="w-full sm:w-full min-h-screen pt-10 pb-10">
        <HomeTop />
        <ServicesCard language={language || ""} />
        
      </div>
    );
  }
  