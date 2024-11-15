import { cn } from "@/utils";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Variant = "contained" | "texted" | "outlined";
interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: Variant;
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
        "text-brand px-3 text-base flex select-none justify-center transition-all gap-1 items-center py-1.5 rounded-lg font-black",
        `${variantStyles[variant]}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const variantStyles: Record<Variant, string> = {
  contained:
    "bg-white ring-brand focus:ring-4 hover:bg-slate-100 active:bg-slate-200",
  outlined:
    "bg-transparent hover:bg-gray-100/50 active:bg-gray-100 border border-brand-gray-100 text-brand-gray-200",
  texted: "bg-transparent text-white hover:bg-black/10 active:bg-black/15",
};
export { Button };
