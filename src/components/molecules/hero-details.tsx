import React from "react";
import { Flex } from "../atoms";
import Link from "next/link";
import { DetailCard } from "./detail-card";

const HeroDetails = () => {
  return (
    <Flex className="w-1/2" gap={4} direction="col">
      <Flex className="py-14" gap={4} direction="col">
        <h1 className="max-sm:text-4xl text-5xl font-black text-white">
          최고의 실력을 가진 외국인 인재를 찾고 계신가요?
        </h1>
        <h3 className="max-sm:text-lg text-2xl font-black text-white">
          법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
        </h3>
        <Link
          href="/"
          className="max-sm:text-base text-lg  underline font-black max-sm:text-yellow-300 text-white"
        >
          개발자가 필요하신가요?
        </Link>
      </Flex>
      <Flex className="max-sm:hidden gap-2" justify="between">
        <DetailCard
          title="평균 월 120만원"
          content="임금을 해당 국가를 기준으로 계산합니다."
        />
        <DetailCard
          title="최대 3회 인력교체"
          content="막상 채용해보니 맞지 않아도 걱정하지 마세요."
        />
        <DetailCard
          title="평균 3일, 최대 10일"
          content="급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다."
        />
      </Flex>
    </Flex>
  );
};

export { HeroDetails };
