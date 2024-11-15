import { Flex } from "../atoms";
interface ServiceCardProps {
  title: string;
  icon: JSX.Element;
}

const ServiceCard = ({ icon, title }: ServiceCardProps) => {
  return (
    <Flex
      className="bg-white/20 hover:bg-white/40 hover:shadow-white cursor-pointer transition-all rounded-xl w-full gap-6 p-4 animate-fade-in duration-500"
      align="center"
    >
      <Flex
        justify="center"
        align="center"
        className="bg-white/40 size-14 rounded-lg"
      >
        {icon}
      </Flex>
      <h3 className="font-black text-2xl text-white">{title}</h3>
    </Flex>
  );
};

export { ServiceCard };
