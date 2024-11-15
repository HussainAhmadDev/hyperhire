import { cn } from "@/utils";
import { Button } from "./button";
import { ChevronIcon } from "./chevron-icon";
import { ComponentProps } from "react";

interface DropdownTriggerProps extends ComponentProps<typeof Button> {
  open: boolean;
  toggleOpen(): void;
}
const DropdownTrigger = ({
  open,
  toggleOpen,
  children,
  ...props
}: DropdownTriggerProps) => {
  return (
    <Button variant="texted" onClick={toggleOpen} {...props}>
      {children}
      <ChevronIcon className={cn("transition-all", { "rotate-180": open })} />
    </Button>
  );
};

export { DropdownTrigger };
