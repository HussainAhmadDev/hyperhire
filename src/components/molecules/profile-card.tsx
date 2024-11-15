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
      className={"bg-white  rounded-xl shadow-lg p-9 max-sm:gap-4 gap-9"}
      direction="col"
    >
      <Flex direction="col" className="gap-4">
        <div className="relative  w-[120px] max-sm:w-16 m-auto">
          <Avatar
            src={picture}
            alt={name}
            size={120}
            className="m-auto relative max-sm:w-16 "
          />
          <div className="absolute bottom-1 right-2">
            <FlagIcon />
          </div>
        </div>
        <Flex direction="col">
          <h3 className="max-sm:text-sm text-2xl font-black text-center">
            {name}
          </h3>
          <p className="max-sm:text-sm text-brand text-center font-black">
            {experience}
          </p>
        </Flex>
      </Flex>

      <Flex gap={1} wrap justify="center">
        {skills?.map((skill, index) => (
          <Button
            variant="outlined"
            className="max-sm:text-sm px-3 py-1"
            key={`${skill}-${index}`}
          >
            {skill}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export { ProfileCard };
