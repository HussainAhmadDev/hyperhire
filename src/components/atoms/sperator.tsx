import { cn } from "@/utils";

const Sperator = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHRElement>,
  HTMLHRElement
>) => {
  return (
    <hr
      className={cn("w-full border-white border border-solid", className)}
      {...props}
    />
  );
};

export { Sperator };
