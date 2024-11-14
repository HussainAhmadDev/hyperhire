import React from "react";
import { ArrowIcon } from "../atoms";

interface FooterCardsProps {
  icon: React.ReactNode;
  title: string;
  buttonText: string;
}

const FooterCards = ({ icon, title, buttonText }: FooterCardsProps) => {
  return (
    <div className="bg-[#fff] rounded-xl w-full flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-3">
        <div>{icon}</div>
        <h2 className="font-[900] text-[#343741] text-[14px]">{title}</h2>
      </div>
      <div>
        <button className="font-[900] flex items-center gap-1 text-[#5E626F] text-[14px]">
          {buttonText}
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};

export { FooterCards };
