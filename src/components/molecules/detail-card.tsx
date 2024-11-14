import { Flex, Sperator } from "../atoms";

interface DetailCardProps {
  title: string;
  content: string;
}
const DetailCard = ({ title, content }: DetailCardProps) => {
  return (
    <Flex direction="col" className="max-w-44" gap={2}>
      <Sperator className="max-w-32" />
      <h4 className="font-black text-white text-lg">{title}</h4>
      <p className="font-black text-white text-lg">{content}</p>
    </Flex>
  );
};

export { DetailCard };
