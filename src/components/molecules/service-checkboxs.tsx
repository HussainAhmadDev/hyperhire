import Link from "next/link";
import { Checkbox, Container } from "../atoms";

const ServiceCheckboxs = () => {
  return (
    <Container className="lg:hidden flex gap-3 flex-wrap">
      {services.map((service, index) => (
        <Checkbox
          label={service}
          labelClassName="text-white"
          defaultChecked
          key={`${index}-${service}`}
        />
      ))}
      <Link
        href="/"
        className="sm:hidden text-lg  underline font-black text-yellow-300"
      >
        개발자가 필요하신가요?
      </Link>
    </Container>
  );
};

const services = ["한국어 능력", "업무 수행 능력", "겸업 여부", "평판 조회"];

export { ServiceCheckboxs };
