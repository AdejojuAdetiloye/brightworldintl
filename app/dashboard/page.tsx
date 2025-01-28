"use client";
import AdminBooks from "@/components/admin-books-card";
import React, { useEffect, useState } from "react";
import uploadBookData from "../firebase/uploadData";
import { redirect } from "next/navigation";

const Admin = () => {
  //states to manage the books upload
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState();
  const [category, setCategory] = useState("");
  const [audio, setAudio] = useState();
  const [video, setVideo] = useState();
  const [loading, setLoading] = useState(false);
  const [placesToGetBook, setPlacesToGetBook] = useState("");

const [currentUser,setCurrentUser] = useState("");

  //To fetch user from local storage
  const [isValidUser, setIsValidUser] = useState(false);  // To manage loading state or checks
  //to check user
  const user = localStorage.getItem("user")

  useEffect(() => {
    const fetchDetails = () => {
      const userFromStorage = localStorage.getItem("user")
      const userFromEnv = process.env.NEXT_PUBLIC_ADMIN_ID

       // Normalize both strings and trim them to ensure equality check works
       const normalizeString = (str) => str.normalize("NFC").trim();

       const normalizedUserFromStorage = normalizeString(userFromStorage);
       const normalizedUserFromEnv = normalizeString(userFromEnv);

      //  console.log("from storage ",normalizedUserFromStorage)
      //  console.log("from env ",normalizedUserFromEnv)
       

       // Use localeCompare for strict equality check
    if (normalizedUserFromStorage.localeCompare(normalizedUserFromEnv) === 0) {
      setIsValidUser(true);
    } else {
      setIsValidUser(false);
    }
    }
    fetchDetails()
  }, []);

  if(!user){
    return redirect("/admin")
  }

  // console.log("is it valid? ",isValidUser)

  //methods to handle onInputChange
  const handleTitleInPutChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionInPutChange = (event) => {
    setDescription(event.target.value);
  };


  const handleCategoryInPutChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePlacesInPutChange = (event) => {
    setPlacesToGetBook(event.target.value);
  };

 

  //to upload book
  const uploadBook = async () => {

    try {
      console.log("current user id: ",currentUser)
      setLoading(true);
      if (title === "" || description === "" || category === "" || placesToGetBook === "") {
        alert("Enter all the required fields!");
        setLoading(false);
      }
      
      uploadBookData(title,category,description,placesToGetBook,thumbnail,audio,video).then((res) =>{
        if(res){
          setTitle("")
          // setDescription("")
          // setCategory("")
          // setPlacesToGetBook("")
          // setAudio()
          // setVideo("")
          // setThumbnail("")
          setLoading(false)
        }
      }).catch((e) => {
        setLoading(false)
        alert(e)
      })
    } catch (e) {
      setLoading(false)
      alert(e)
    }
  };

  
if(isValidUser){
  return (
    <div className="w-full mx-5 min-h-screen pt-[100px] bg-gray-50 sm:pl-20">
      <h3 className="font-bold pl-20 text-2xl text-gray-800">
        welcome back <span className="text-blue-600">Admin</span> to dashboard
      </h3>
      {/* Action section */}
      <div className="flex-col-reverse gap-5 sm:flex sm:flex-row sm:gap-10 w-full sm:w-full mt-10">
        {/* Add books section */}
        <div className="w-[300px] h-[500px] sm:w-[400px] sm:h-[850px] shadow-lg rounded-lg pt-5 mx-auto">
          <div className="w-full sm:w-full items-center justify-center grid place-content-center">
            <h1 className="text-gray text-xl text-center">Publish New Book</h1>
            {/* Thumbnail */}
            <label htmlFor="thumbnail" className="mt-2">
              Select thumbnail
            </label>
            <input
              type="file"
              name="thumbnail"
              value={thumbnail}
              className="border border-teal-200 p-4 rounded-xl w-[250px] sm:w-[300px] mx-auto flex mt-1"
              placeholder="select thumbnail"
            />
            {/* Title */}
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleTitleInPutChange}
              className="border border-teal-200 p-4 rounded-xl w-[250px] sm:w-[300px] mx-auto flex mt-3"
              placeholder="enter book title"
            />
            {/* Category */}
            <label htmlFor="category" className="mt-2">
              Select category{" "}
            </label>
            <select
              value={category}
              onChange={handleCategoryInPutChange}
              name="category"
              id="category"
              className="p-1 mt-1"
            >
              <option>TextBook</option>
              <option>Self Development book</option>
              <option>Trending Books</option>
            </select>
            {/* Description */}
            <textarea
              value={description}
              onChange={handleDescriptionInPutChange}
              className="border border-teal-200 p-4 rounded-xl w-[250px] sm:w-[300px] mx-auto flex mt-3 h-[100px]"
              placeholder="enter book description"
              rows={5}
            />
            {/* Places to Get Book */}
            <textarea
              value={placesToGetBook}
              onChange={handlePlacesInPutChange}
              className="border border-teal-200 p-4 rounded-xl w-[250px] sm:w-[300px] mx-auto flex mt-3 h-[100px]"
              placeholder="enter places to get book"
              rows={5}
            />
            {/* Audio file */}
            <label htmlFor="audio" className="mt-3">
              Upload Audio
            </label>
            <input
              type="file"
              name="audio"
              value={audio}
              className="border border-teal-200 p-4 rounded-xl w-[250px] sm:w-[300px] mx-auto flex mt-1"
              placeholder="select thumbnail"
            />
            {/* Video file */}
            <label htmlFor="video" className="mt-3">
              Upload Video
            </label>
            <input
              type="file"
              name="video"
              value={video}
              className="border border-teal-200 p-4 rounded-xl w-[250px] sm:w-[300px] mx-auto flex mt-3"
              placeholder="select thumbnail"
            />
            {/* Upload button */}
            <button
              onClick={uploadBook}
              className="text-white bg-blue-600 rounded-xl p-3 mt-5 "
              type="button"
            >
              {loading ? "PUBLISHING..." : "PUBLISH"}
            </button>
          </div>
        </div>
        {/* Books Display Section */}
        <div className="flex-1  w-full shadow-lg rounded-lg sm:mx-20">
          <AdminBooks />
          <AdminBooks />
          <AdminBooks />
          <AdminBooks />
        </div>
      </div>
    </div>
  );
}
else{
  return (
    <div className="w-full min-h-screen pt-20">
      <h1 className="text-red font-bold text-xl pl-5">Invalid Admin Credentials</h1>
    </div>
  )
}
 
};

export default Admin;
