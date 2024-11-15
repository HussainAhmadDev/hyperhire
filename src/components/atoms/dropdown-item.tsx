import { DetailedHTMLProps, LiHTMLAttributes } from "react";

const DropdownItem = ({
  children,
  ...props
}: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>) => {
  return <li {...props}>{children}</li>;
};

export default DropdownItem;
