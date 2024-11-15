import { cn } from "@/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface FlexProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  justify?: "start" | "center" | "end" | "between" | "around";
  align?: "start" | "center" | "end";
  direction?: "row" | "col";
  wrap?: boolean;
  gap?: number;
}

const Flex = ({
  children,
  justify = "start",
  align = "start",
  direction = "row",
  wrap = false,
  gap = 0,
  className = "",
  ...props
}: FlexProps) => {
  return (
    <div
      className={cn(
        "flex",
        `justify-${justify}`,
        `items-${align}`,
        `flex-${direction}`,
        `gap-${gap}`,
        { "flex-wrap": wrap },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Flex };
