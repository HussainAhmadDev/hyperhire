import { Button, Container, Flex, HamburgerIcon, WhiteLogo } from "../atoms";
import EmploymentDropdown from "./employment-dropdown";

const Header = () => {
  return (
    <Container className="py-3 w-full items-center flex justify-between m-auto">
      <WhiteLogo />
      <Flex align="center" className="max-sm:hidden gap-10">
        <EmploymentDropdown />
        <p className="font-black text-white">해외 개발자 활용 서비스</p>
      </Flex>
      <Button className="max-sm:hidden">문의하기</Button>
      <HamburgerIcon className="max-sm:block hidden" />
    </Container>
  );
};

export { Header };
