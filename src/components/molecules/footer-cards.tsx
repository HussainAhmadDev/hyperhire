import React from "react";
import { ArrowIcon, Button } from "../atoms";

interface FooterCardsProps {
  icon: React.ReactNode;
  title: string;
  buttonText: string;
}

const FooterCards = ({ icon, title, buttonText }: FooterCardsProps) => {
  return (
    <div className="bg-white rounded-xl w-full flex  flex-col gap-4 p-4">
      <div className="flex flex-col gap-3">
        <div>{icon}</div>
        <h2 className="font-black text-zinc-700 text-sm">{title}</h2>
      </div>
      <div>
        <Button className="font-black  px-0 hover:bg-transparent   text-gray-600 text-sm">
          {buttonText}
          <ArrowIcon />
        </Button>
      </div>
    </div>
  );
};

export { FooterCards };
