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
}
const Tooltip = ({
  title,
  className,
  children,
  defualtOpen = true,
  arrowPlacement = "center",
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
          className={cn("bg-white px-3 py-1.5 rounded-lg font-black")}
          {...props}
        >
          {title}
        </div>
        <div
          className="w-1.5 h-2 bg-white px-2 -mt-[1px]"
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
