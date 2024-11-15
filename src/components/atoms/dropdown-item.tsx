import { cn } from "@/utils";
import { DetailedHTMLProps, LiHTMLAttributes } from "react";

const DropdownItem = ({
  children,
  className,
  ...props
}: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>) => {
  return (
    <li
      className={cn(
        "font-medium text-sm hover:bg-brand-cyan-100 transition-all rounded cursor-pointer hover:text-white p-1",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};

export { DropdownItem };
