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
    <footer className="bg-zinc-50 max-sm:py-16 py-20">
      <Container className="flex w-full flex-col max-sm:gap-14 gap-11">
        <Flex className="max-sm:flex-col justify-between max-sm:gap-4">
          <Flex direction="col" className="gap-[18px]">
            <Flex direction="col" className="gap-4">
              <LogoIcon />
              <p className="text-sm font-black text-zinc-700">
                우리는 국가의 장벽을 넘어 최고의 인재를 <br />
                매칭해드립니다.
              </p>
            </Flex>
            <Flex direction="col" gap={2}>
              <h2 className="text-sm font-black text-gray-600">
                010-0000-0000
              </h2>
              <h3 className="text-sm font-black text-gray-600">
                aaaaa@naver.com
              </h3>
            </Flex>
          </Flex>
          <div className="grid max-sm:gap-2 gap-4 max-sm:grid-cols-2 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-4 grid-cols-4 ">
            <FooterCards title="해외 개발자 원격 채용" Icon={CodeIcon} />
            <FooterCards title="외국인 원격 채용 (비개발)" Icon={UserIcon} />
            <FooterCards title="한국어 가능한 외국인 채용" Icon={KoreanIcon} />
            <FooterCards title="해외 개발자 활용 서비스" Icon={SettingIcon} />
          </div>
        </Flex>

        <Flex className="justify-between max-sm:flex-col max-sm:gap-9">
          <Flex className="gap-[11px]">
            <Flex direction="col" className="gap-2.5">
              <h2 className="text-zinc-700 text-xs font-black">상호명</h2>
              <h3 className="text-gray-600 text-sm font-black">하이퍼하이어</h3>
              <p className="text-gray-600 text-sm font-black">
                Hyperhire India Private Limited
              </p>
            </Flex>
            <Flex direction="col" className="gap-2.5">
              <h2 className="text-zinc-700 text-xs font-black">대표 CEO</h2>
              <h3 className="text-gray-600 text-sm font-black">김주현</h3>
              <p className="text-gray-600 text-sm font-black">Juhyun Kim</p>
            </Flex>
          </Flex>
          <Flex className="max-sm:m-0 m-auto max-sm:gap-9 gap-10 max-sm:flex-col">
            <Flex direction="col" className="flex-1 gap-2.5">
              <h2 className="text-zinc-700 text-xs font-black">
                사업자등록번호 CIN
              </h2>
              <h3 className="text-gray-600 text-sm font-black">427-86-01187</h3>
              <p className="text-gray-600 text-sm font-black">
                U74110DL2016PTC290812
              </p>
            </Flex>
            <Flex direction="col" className="gap-2.5">
              <h2 className="text-zinc-700 text-xs font-black">주소 ADDRESS</h2>
              <h3 className="text-gray-600 text-sm font-black">
                서울특별시 강남대로 479, 지하 1층 238호
              </h3>
              <p className="text-gray-600 max-w-[455px] text-sm font-black">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
                Delhi, 110053 India
              </p>
            </Flex>
          </Flex>
        </Flex>
        <h2 className="text-gray-600 text-sm font-black">ⓒ 2023 Hyperhire</h2>
      </Container>
    </footer>
  );
};

export { Footer };
