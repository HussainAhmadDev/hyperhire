import { cn } from "@/utils";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface CheckboxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  labelClassName?: string;
}

const Checkbox = ({
  label,
  className,
  labelClassName,
  ...props
}: CheckboxProps) => {
  return (
    <label
      className={cn(
        "flex items-center text-base text-black cursor-pointer",
        className
      )}
    >
      <input
        type="checkbox"
        className="absolute opacity-0 top-0 w-0 h-0 peer hidden"
        {...props}
      />
      <span className="checkbox-mark" />
      <span className={cn("font-black", labelClassName)}>{label}</span>
    </label>
  );
};

export { Checkbox };
