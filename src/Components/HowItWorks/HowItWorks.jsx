import React from "react";
import { HowItWorkSteps } from "../../constant";
import HowItWorkStepCard from "./HowItWorkStepCard";

const HowItWorks = () => {
  return (
    <div className="bg-Black p-4 sm:p-8 md:p-16 lg:p-24 text-White">
      <div className="text-center w-full">
        <div className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4 lg:mb-8">
          How It Works
        </div>
        <div className="text-LightGray text-sm md:text-md lg:text-lg font-medium max-w-xl mx-auto">
          Crypto uses cryptographic methods to ensure secure transactions and
          manage the creation of new digital currency units.
        </div>
      </div>
      <div className="pt-4 sm:pt-8 md:pt-16 lg:pt-24 flex flex-wrap items-center gap-4 lg:gap-8 w-full">
        {HowItWorkSteps.map((step) => {
          return (
            <HowItWorkStepCard
              key={step.id}
              image={step.image}
              title={step.title}
              description={step.description}
              stepNumber={step.step}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
