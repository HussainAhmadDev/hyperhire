import { Flex } from "../atoms";

interface ServiceCardProps {
  title: string;
  icon: JSX.Element;
}

const ServiceCard = ({ icon: Icon, title }: ServiceCardProps) => {
  return (
    <Flex className="bg-white/20 rounded-xl w-full p-4">
      {Icon}
      {title}
    </Flex>
  );
};

export { ServiceCard };
