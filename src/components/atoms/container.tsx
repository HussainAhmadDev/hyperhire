import { cn } from "@/utils";
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

const Container = ({
  className,
  children,
  ...props
}: PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>) => {
  return (
    <div
      className={cn("p-3 w-full max-w-[1224px] m-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { Container };
