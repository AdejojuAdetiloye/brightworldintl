import React from "react";

const PublishingAlertCard = ({ isOpen, onClose, data }) => {
  return (
    <div className="w-[500px] h-[400px]  m-2 p-3 text-center justify-center">
      <h1 className="font-semibold  text-blue-900 font-sans text-xl mb-3 italic">
        You can write a book or develop other material for us to publish. You
        have an idea or a project to publish, which relate to our vision having
        to do with personal development, or as a teacher who is still teaching
        or has taught at any level of education,you can be given the opportunity
        to work with us at Bright Education and Development services to develop
        teaching, learning or self development materials and textbooks. Your
        work or effort will be protected and you will enjoy the benefit of it.
      </h1>
    </div>
  );
};

export default PublishingAlertCard;
