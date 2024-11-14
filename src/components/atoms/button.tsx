import { cn } from "@/utils";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "contained" | "text";
}
const Button = ({
  className,
  children,
  variant = "contained",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "text-brand px-6 text-base flex justify-center gap-1 items-center py-1.5 rounded-lg font-black",
        {
          "bg-white ring-brand focus:ring-2 hover:bg-slate-100 active:bg-slate-200":
            variant === "contained",
          "bg-transparent px-3 text-white hover:bg-black/10 active:bg-black/15":
            variant === "text",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
