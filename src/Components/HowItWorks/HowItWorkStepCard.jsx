import React from "react";

const HowItWorkStepCard = ({ image, title, description, stepNumber }) => {
  return (
    <div
      className="w-full sm:w-[42%] lg:w-1/5 border border-Gray p-2 md:p-4 rounded-md flex flex-col items-center justify-center shadow-none hover:shadow-sm hover:bg-LightGray hover:bg-opacity-10 hover:cursor-pointer"
      style={{ boxShadow: "0 0 10px 0 rgba(255,255,255,0.1)" }}
    >
      <img
        src={image}
        alt={title + " Image"}
        className="relative transform transition-transform duration-500 hover:animate-flip"
      />
      <div className="uppercase text-LightGray font-bold text-xs">
        step {stepNumber}
      </div>
      <div className="text-xl font-bold py-2">{title}</div>
      <div className="py-2 text-center text-sm font-medium text-LightGray">
        {description}
      </div>
    </div>
  );
};

export default HowItWorkStepCard;
