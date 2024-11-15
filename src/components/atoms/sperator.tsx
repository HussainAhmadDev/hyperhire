import { cn } from "@/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

const Sperator = ({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>) => {
  return (
    <hr
      className={cn("w-full border-white border border-solid", className)}
      {...props}
    />
  );
};

export { Sperator };
