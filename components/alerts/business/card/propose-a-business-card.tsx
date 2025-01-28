/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProposeBusinessCard = ({ isOpen, onClose, data }) => {
  return (
    <div className="w-[500px] h-[400px]  m-2 p-3 text-center justify-center">
      <h1 className="font-bold  text-blue-900 font-sans text-xl mb-3 italic">
        Buy and Sell our Products and Services to Earn Money
      </h1>

      <h1 className="font-semibold  text-blue-900 font-sans text-xl mt-3 mb-3 italic">
        You can be a full time distributor or retailer of our products or
        services. You would purchase the product(s) at a discounted rate and
        sell them at market price for profit. When it is a service, you can act
        like an agent, that is, you negotiate the service for us with the
        customer and you get paid a percentage of the price. If you have
        interest or any idea of how this can work, contact us.
      </h1>
    </div>
  );
};

export default ProposeBusinessCard;
