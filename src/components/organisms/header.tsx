import React from "react";
import { Button, ChevronIcon, WhiteLogo } from "../atoms";

const Header = () => {
  return (
    <div className="py-3 w-full max-w-6xl items-center flex justify-around m-auto">
      <WhiteLogo />
      <div className="flex items-center gap-10">
        <Button variant="text">
          문의하기 <ChevronIcon />
        </Button>
        <p className="font-black text-white">해외 개발자 활용 서비스</p>
      </div>
      <Button>문의하기</Button>
    </div>
  );
};

export { Header };
