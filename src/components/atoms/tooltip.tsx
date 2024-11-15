import { cn } from "@/utils";
import {
  ComponentProps,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from "react";
import { Flex } from "./flex";

type ArrowPlacement = "left" | "center" | "right";

interface TooltipProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    "title"
  > {
  title: string | ReactNode;
  defualtOpen?: boolean;
  arrowPlacement?: ArrowPlacement;
  tooltipClassName?: string;
  arrowClassName?: string;
}
const Tooltip = ({
  title,
  className,
  children,
  defualtOpen = true,
  arrowPlacement = "center",
  tooltipClassName,
  arrowClassName,
  ...props
}: TooltipProps) => {
  return (
    <div className="group relative">
      <Flex
        className={cn(
          "invisible absolute group-hover:visible bottom-[calc(100%+16px)]",
          {
            visible: defualtOpen,
          },
          className
        )}
        direction="col"
        align={arrowStyles?.[arrowPlacement]}
        justify="center"
      >
        <div
          className={cn(
            "bg-white px-3 py-1.5 rounded-lg font-black",
            tooltipClassName
          )}
          {...props}
        >
          {title}
        </div>
        <div
          className={cn(
            "w-2.5 h-2 bg-white mx-2 -mt-[1px] arrow-mark",
            arrowClassName
          )}
          style={{
            clipPath: "polygon(50% 100%, 0 0, 100% 0)",
          }}
        />
      </Flex>
      {children}
    </div>
  );
};

const arrowStyles: Record<
  ArrowPlacement,
  ComponentProps<typeof Flex>["align"]
> = {
  left: "start",
  center: "center",
  right: "end",
};

export { Tooltip };
