import React, { ReactNode } from "react";
interface TooltipProps {
  title: string | ReactNode;
}
const Tooltip = ({ title }: TooltipProps) => {
  return <div className="">{title}</div>;
};

export { Tooltip };
