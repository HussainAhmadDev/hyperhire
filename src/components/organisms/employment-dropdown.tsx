import { useState } from "react";
import {
  Sperator,
  DropdownItem,
  DropdownTrigger,
  DropdownList,
} from "../atoms";

const EmploymentDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <div className="relative">
      <DropdownTrigger open={open} toggleOpen={toggleOpen}>
        문의하기
      </DropdownTrigger>
      <DropdownList open={open}>
        <DropdownItem className="font-black" onClick={toggleOpen}>
          채용
        </DropdownItem>
        <DropdownItem onClick={toggleOpen}>해외 개발자 원격 채용</DropdownItem>
        <DropdownItem onClick={toggleOpen}>
          외국인 원격 채용 (비개발 직군)
        </DropdownItem>
        <Sperator className="border-gray-100 border-b-0" />
        <DropdownItem onClick={toggleOpen}>
          한국어 가능 외국인 채용
        </DropdownItem>
      </DropdownList>
    </div>
  );
};

export default EmploymentDropdown;
