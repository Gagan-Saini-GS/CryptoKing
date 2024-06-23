import React from "react";
import Logo from "../../assets/images/usd-coin.png";
import { FooterOptions, developerDetails } from "../../constant";
import LinkedLogo from "../../assets/images/linkedin.png";
import GithubLogo from "../../assets/images/github.png";

const Footer = () => {
  return (
    <div className="bg-Darkblack text-White px-4 py-4 sm:px-8 sm:py-6 md:px-16 md:py-12 lg:px-24 lg:py-16 flex flex-col md:flex-row flex-wrap justify-between">
      <div className="w-full lg:w-2/5 pb-5 lg:pb-0">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <div className="font-semibold text-3xl ml-4">Crypto King</div>
        </div>
        <div className="py-4 text-2xl font-semibold">Let's talk! 🤙</div>
        <div className="text-xl text-LightGray py-2">
          <div>{developerDetails.phoneNumber}</div>
          <div>{developerDetails.email}</div>
        </div>
        <div className="flex items-center gap-3 pt-4">
          <a href={developerDetails.linkedinURL} target="_blank">
            <img src={LinkedLogo} alt="Linked Logo" className="w-6 h-6" />
          </a>
          <a href={developerDetails.githubURL} target="_blank">
            <img src={GithubLogo} alt="Github Logo" className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:justify-between w-full lg:w-3/5">
        {FooterOptions.map((option) => {
          return (
            <div className="">
              <div className="uppercase font-medium text-lg pb-2">
                {option.title}
              </div>
              {option.suboptions.map((suboption) => (
                <div className="pb-1 text-LightGray font-medium hover:text-Blue cursor-pointer">
                  {suboption}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
