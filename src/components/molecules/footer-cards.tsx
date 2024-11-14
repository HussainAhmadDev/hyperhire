import React from "react";
import { ArrowIcon, Button, Flex } from "../atoms";

interface FooterCardsProps {
  icon: React.ReactNode;
  title: string;
  buttonText: string;
}

const FooterCards = ({ icon, title, buttonText }: FooterCardsProps) => {
  return (
    <Flex direction="col" gap={4} className="bg-white rounded-xl w-full p-4">
      <Flex direction="col" gap={3}>
        {icon}
        <h2 className="font-black text-zinc-700 text-sm">{title}</h2>
      </Flex>
      <Button className="text-gray-600 text-sm w-fit" variant="text">
        {buttonText}
        <ArrowIcon />
      </Button>
    </Flex>
  );
};

export { FooterCards };
