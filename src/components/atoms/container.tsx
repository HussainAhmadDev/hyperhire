import { cn } from "@/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type Align = "right" | "left";
interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  aligned?: Align;
}
const Container = ({
  className,
  children,
  aligned,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "p-3 w-full max-w-[1224px] m-auto",
        `${aligned && calculatedStyles[aligned]}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const calculatedStyles: Record<Align, string> = {
  left: "max-w-[calc(1224px+calc((100vw-1224px)/2))] m-0 mr-auto",
  right: "max-w-[calc(1224px+calc((100vw-1224px)/2))] m-0 ml-auto",
};
export { Container };
