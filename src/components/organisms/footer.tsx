import React from "react";
import {
  CodeIcon,
  Container,
  Flex,
  KoreanIcon,
  LogoIcon,
  SettingIcon,
  UserIcon,
} from "../atoms";
import { FooterCards } from "../molecules";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 py-20">
      <Container className="flex flex-col gap-11">
        <div className="flex md:flex-row max-sm:flex-col justify-between md:gap-0 sm:gap-4">
          <div className="flex flex-col gap-[18px] flex-1">
            <div className="flex flex-col gap-4">
              <LogoIcon />
              <p className="text-sm font-black max-w-[260px]  text-zinc-700">
                우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
              </p>
            </div>
            <Flex gap={2} direction="col">
              <h2 className="text-[13px] font-black text-gray-600">
                010-0000-0000
              </h2>
              <h3 className="text-[13px] font-black text-gray-600">
                aaaaa@naver.com
              </h3>
            </Flex>
          </div>
          <div className="grid max-sm:grid-cols-2 md:grid-cols-2 flex-2 lg:grid-cols-3 xl:grid-cols-4   gap-4 w-full">
            <FooterCards title="해외 개발자 원격 채용" Icon={CodeIcon} />
            <FooterCards title="외국인 원격 채용 (비개발)" Icon={UserIcon} />
            <FooterCards title="한국어 가능한 외국인 채용" Icon={KoreanIcon} />
            <FooterCards title="해외 개발자 활용 서비스" Icon={SettingIcon} />
          </div>
        </div>

        <div className="flex md:flex-row max-sm:flex-col md:gap-0 max-sm:gap-9">
          <div className="flex gap-[11px]">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-zinc-700 text-xs font-black">상호명</h2>
              <h3 className="text-gray-600 text-[13px] font-black">
                하이퍼하이어
              </h3>
              <p className="text-gray-600 text-[13px] font-black">
                Hyperhire India Private Limited
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h2 className="text-zinc-700 text-xs font-black">대표 CEO</h2>
              <h3 className="text-gray-600 text-[13px] font-black">김주현</h3>
              <p className="text-gray-600 text-[13px] font-black">Juhyun Kim</p>
            </div>
          </div>
          <div className="flex md:flex-row max-sm:flex-col gap-[42px] w-full">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-zinc-700 text-xs font-black">
                사업자등록번호 CIN
              </h2>
              <h3 className="text-gray-600 text-[13px] font-black">
                427-86-01187
              </h3>
              <p className="text-gray-600 text-[13px] font-black">
                U74110DL2016PTC290812
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h2 className="text-zinc-700 text-xs font-black">주소 ADDRESS</h2>
              <h3 className="text-gray-600 text-[13px] font-black">
                서울특별시 강남대로 479, 지하 1층 238호
              </h3>
              <p className="text-gray-600 max-w-[455px] text-[13px] font-black">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
                Delhi, 110053 India
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-gray-600 text-[13px] font-black">
          ⓒ 2023 Hyperhire
        </h2>
      </Container>
    </footer>
  );
};

export { Footer };
