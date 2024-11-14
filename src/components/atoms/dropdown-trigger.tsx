import { cn } from "@/utils";
import { Button } from "./button";
import { ChevronIcon } from "./chevron-icon";
import { PropsWithChildren } from "react";

interface DropdownTriggerProps {
  open: boolean;
  toggleOpen(): void;
}
const DropdownTrigger = ({
  children,
  open,
  toggleOpen,
}: PropsWithChildren<DropdownTriggerProps>) => {
  return (
    <Button variant="text" onClick={toggleOpen}>
      {children} <ChevronIcon className={cn({ "rotate-90": open })} />
    </Button>
  );
};

export { DropdownTrigger };
