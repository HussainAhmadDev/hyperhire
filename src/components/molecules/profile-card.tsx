import Image from "next/image";
import { Button, Flex } from "../atoms";

interface ProfileCardProps {
  picture: string;
  name: string;
  experience: string;
  skills: string[];
}

const ProfileCard = ({
  experience,
  name,
  picture,
  skills,
}: ProfileCardProps) => {
  return (
    <div className={"bg-white w-[292px] rounded-lg shadow-lg p-6 "}>
      <Image
        src={picture}
        alt={name}
        width={200}
        height={200}
        className="!w-full"
      />
      <h3 className="text-2xl font-black text-center">{name}</h3>
      <p className="text-brand text-center font-black">{experience}</p>
      <Flex gap={2} wrap justify="center">
        {skills?.map((skill, index) => (
          <Button variant="outlined" key={`${skill}-${index}`}>
            {skill}
          </Button>
        ))}
      </Flex>
    </div>
  );
};

export { ProfileCard };
