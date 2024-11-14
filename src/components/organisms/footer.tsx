import React from "react";
import {
  CodeIcon,
  KoreanIcon,
  LogoIcon,
  SettingIcon,
  UserIcon,
} from "../atoms";
import { FooterCards } from "../molecules";
interface CardData {
  title: string;
  buttonText: string;
  icon: React.ReactNode;
}

const FooterOrganism = () => {
  const data: CardData[] = [
    {
      icon: <CodeIcon />,
      title: "해외 개발자 원격 채용",
      buttonText: "바로가기",
    },
    {
      icon: <UserIcon />,

      title: "외국인 원격 채용 (비개발)",
      buttonText: "바로가기",
    },
    {
      icon: <KoreanIcon />,

      title: "한국어 가능한 외국인 채용",
      buttonText: "바로가기",
    },
    {
      icon: <SettingIcon />,

      title: "해외 개발자 활용 서비스",
      buttonText: "바로가기",
    },
  ];
  return (
    <div className="bg-red-100 flex flex-col gap-11 sm:p-4 md:p-4 lg:p-20">
      <div className="flex md:gap-0 sm:gap-4">
        <div className="flex flex-col gap-[18px] w-[40%]">
          <div className="flex flex-col gap-4">
            <LogoIcon />
            <p className="text-sm font-black max-w-[260px]  text-[#343741]">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[13px] font-black  text-[#5E626F]">
              010-0000-0000
            </h2>
            <h3 className="text-[13px] font-black  text-[#5E626F]">
              aaaaa@naver.com
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {data.map((el, ind) => (
            <FooterCards
              key={ind}
              icon={el.icon}
              title={el.title}
              buttonText={el.buttonText}
            />
          ))}
        </div>
      </div>

      <div className="flex">
        <div className="flex gap-[11px] w-[40%]">
          <div className="flex flex-col gap-2.5">
            <h2 className="text-[#343741] text-xs font-black">상호명</h2>
            <h3 className="text-[#5E626F] text-[13px] font-black">
              하이퍼하이어
            </h3>
            <p className="text-[#5E626F] text-[13px] font-black">
              Hyperhire India Private Limited
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h2 className="text-[#343741] text-xs font-black">대표 CEO</h2>
            <h3 className="text-[#5E626F] text-[13px] font-black">김주현</h3>
            <p className="text-[#5E626F] text-[13px] font-black">Juhyun Kim</p>
          </div>
        </div>
        <div className="flex gap-[42px] w-full">
          <div className="flex flex-col gap-2.5">
            <h2 className="text-[#343741] text-xs font-black">
              사업자등록번호 CIN
            </h2>
            <h3 className="text-[#5E626F] text-[13px] font-black">
              427-86-01187
            </h3>
            <p className="text-[#5E626F] text-[13px] font-black">
              U74110DL2016PTC290812
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h2 className="text-[#343741] text-xs font-black">주소 ADDRESS</h2>
            <h3 className="text-[#5E626F] text-[13px] font-black">
              서울특별시 강남대로 479, 지하 1층 238호
            </h3>
            <p className="text-[#5E626F] max-w-[455px] text-[13px] font-black">
              D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
              Delhi, 110053 India
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-[#5E626F] text-[13px] font-black">
        ⓒ 2023 Hyperhire
      </h2>
    </div>
  );
};

export { FooterOrganism };
