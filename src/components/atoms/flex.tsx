import React, { PropsWithChildren } from "react";
import { cn } from "@/utils";

interface FlexProps
  extends PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > {
  children: React.ReactNode;
  justify?: "start" | "center" | "end" | "between" | "around";
  align?: "start" | "center" | "end";
  direction?: "row" | "column";
  wrap?: boolean;
  gap?: number;
}

const Flex: React.FC<FlexProps> = ({
  children,
  justify = "start",
  align = "start",
  direction = "row",
  wrap = false,
  gap = 0,
  className = "",
  ...props
}) => {
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
