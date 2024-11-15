import { Avatar, Button, FlagIcon, Flex } from "../atoms";

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
    <Flex
      className={"bg-white w-full rounded-lg shadow-lg p-6 gap-4"}
      direction="col"
    >
      <div className="relative inline-block">
        <Avatar src={picture} alt={name} size={120} className="m-auto" />
        <div className="w-[120px] absolute bottom-1 right-0.5">
          <FlagIcon />
        </div>
      </div>

      <h3 className="text-2xl font-black text-center">{name}</h3>
      <p className="text-brand text-center font-black">{experience}</p>
      <Flex gap={2} wrap justify="center">
        {skills?.map((skill, index) => (
          <Button variant="outlined" key={`${skill}-${index}`}>
            {skill}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export { ProfileCard };
