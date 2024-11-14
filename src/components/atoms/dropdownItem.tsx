import React from "react";

const DropdownItem = ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>) => {
  return <li {...props}>{children}</li>;
};

export default DropdownItem;
