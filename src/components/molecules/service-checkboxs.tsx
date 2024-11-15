import { Checkbox, Container } from "../atoms";

const ServiceCheckboxs = () => {
  return (
    <Container className="lg:hidden flex gap-3 flex-wrap">
      <Checkbox
        label="한국어 능력"
        labelClassName="text-white"
        defaultChecked
      />
      <Checkbox
        label="업무 수행 능력"
        labelClassName="text-white"
        defaultChecked
      />
      <Checkbox label="겸업 여부" labelClassName="text-white" defaultChecked />
      <Checkbox label="평판 조회" labelClassName="text-white" defaultChecked />
    </Container>
  );
};

export { ServiceCheckboxs };
