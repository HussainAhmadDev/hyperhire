import { cn } from "@/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

const DropdownList = ({
  children,
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>) => {
  return (
    <ul className={cn("flex flex-col gap-1 bg-white", className)} {...props}>
      {children}
    </ul>
  );
};

export { DropdownList };
