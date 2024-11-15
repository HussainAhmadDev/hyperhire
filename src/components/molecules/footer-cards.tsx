import { ArrowIcon, Button, Flex } from "../atoms";

interface FooterCardsProps {
  Icon: () => JSX.Element;
  title: string;
}

const FooterCards = ({ Icon, title }: FooterCardsProps) => {
  return (
    <Flex
      direction="col"
      gap={4}
      className="bg-white rounded-xl w-full p-4 max-sm:justify-between"
    >
      <Flex direction="col" className="gap-3">
        <Icon />
        <h2 className="font-black text-zinc-700 text-sm">{title}</h2>
      </Flex>
      <Button
        className="text-gray-600 text-sm w-fit px-0 hover:bg-transparent"
        variant="texted"
      >
        바로가기
        <ArrowIcon />
      </Button>
    </Flex>
  );
};

export { FooterCards };
