/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import BookService from "./books-service";
import LearningService from "./learning-service";
import LanguageServices from "./language-services";
import PublishingService from "./publishing-service";
import AppsService from "./apps-services";
import BusinessService from "./business-service";

const ServicesCard = ({ language }: { language: string }) => {
  //states for all components
  const [isBook, setIsBook] = useState(false);
  const [isLearning, setIsLearning] = useState(false);
  const [isLanguageService, setIsLanguageService] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isOurApps, setIsOurApps] = useState(false);
  const [isBusiness, setIsBusiness] = useState(false);


  //method toggling book
  const handleBook = () => {
    setIsBook(!isBook);
    if (isLearning === true) setIsLearning(false);
    if (isLanguageService === true) setIsLanguageService(false);
    if (isPublishing === true) setIsPublishing(false);
    if (isOurApps === true) setIsOurApps(false);
    if (isBusiness === true) setIsBusiness(false);
  };

  //method toggling learning
  const handleLearning = () => {
    setIsLearning(!isLearning);
    if (isBook === true) setIsBook(false);
    if (isLanguageService === true) setIsLanguageService(false);
    if (isPublishing === true) setIsPublishing(false);
    if (isOurApps === true) setIsOurApps(false);
    if (isBusiness === true) setIsBusiness(false);
  };

  //method toggling language service
  const handleLanguageService = () => {
    setIsLanguageService(!isLanguageService);
    if (isBook === true) setIsBook(false);
    if (isLearning === true) setIsLearning(false);
    if (isPublishing === true) setIsPublishing(false);
    if (isOurApps === true) setIsOurApps(false);
    if (isBusiness === true) setIsBusiness(false);
  };

  //method toggling publishing
  const handlePublishing = () => {
    setIsPublishing(!isPublishing);
    if (isBook === true) setIsBook(false);
    if (isLanguageService === true) setIsLanguageService(false);
    if (isLearning === true) setIsLearning(false);
    if (isOurApps === true) setIsOurApps(false);
    if (isBusiness === true) setIsBusiness(false);
  };

  //method toggling our Apps
  const handleApps = () => {
    setIsOurApps(!isOurApps);
    if (isBook === true) setIsBook(false);
    if (isLanguageService === true) setIsLanguageService(false);
    if (isPublishing === true) setIsPublishing(false);
    if (isLearning === true) setIsLearning(false);
    if (isBusiness === true) setIsBusiness(false);
  };

  //method toggling business
  const handleBusiness = () => {
    setIsBusiness(!isBusiness);
    if (isBook === true) setIsBook(false);
    if (isLanguageService === true) setIsLanguageService(false);
    if (isPublishing === true) setIsPublishing(false);
    if (isOurApps === true) setIsOurApps(false);
    if (isLearning === true) setIsLearning(false);
  };

  return (
    <div className="w-full sm:w-full grid grid-cols-1 sm:grid-cols-6  gap-6">
      {/* Books */}
      <BookService
        isBook={isBook}
        setIsBook={setIsBook}
        handleBook={handleBook}
        language={language}
      />
      {/* Learning */}
      <LearningService
        isLearning={isLearning}
        setIsLearning={setIsLearning}
        handleLearning={handleLearning}
        language={language}
      />
      {/* Language service */}
      <LanguageServices
        isLanguageService={isLanguageService}
        setIsLanguageService={setIsLanguageService}
        handleLanguageService={handleLanguageService}
        language={language}
      />
      {/* Publishing */}
      <PublishingService
        isPublishing={isPublishing}
        setIsPublishing={setIsPublishing}
        handlePublishing={handlePublishing}
        language={language}
      />
      {/* Our Apps */}
      <AppsService
        isOurApps={isOurApps}
        setIsOurApps={setIsOurApps}
        handleApps={handleApps}
        language={language}
      />
      {/* Busines */}
      <BusinessService
        isBusiness={isBusiness}
        setIsBusiness={setIsBusiness}
        handleBusiness={handleBusiness}
        language={language}
      />
    </div>
  );
};

export default ServicesCard;
