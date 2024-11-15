import { cn } from "@/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface DropdownListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  open?: boolean;
}
const DropdownList = ({
  children,
  className,
  open,
  ...props
}: DropdownListProps) => {
  if (!open) {
    return null;
  }
  return (
    <ul
      className={cn(
        "flex flex-col gap-1 rounded-md p-2 w-max border-gray-100 border bg-white absolute transition-all top-[calc(100%+8px)] -z-[1]",
        {
          "z-50 visible origin-top animate-grow-in": open,
        },
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

export { DropdownList };
