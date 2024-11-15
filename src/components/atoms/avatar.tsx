import { cn } from "@/utils";
import Image from "next/image";
import { ComponentProps } from "react";

interface AvatarProps extends ComponentProps<typeof Image> {
  size?: number;
}

const Avatar = ({
  src,
  alt,
  width = 50,
  height = 50,
  size = 50,
  className,
  priority = true,
  ...props
}: AvatarProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size ?? width}
      height={size ?? height}
      className={cn("rounded-full", className)}
      priority={priority}
      {...props}
    />
  );
};

export { Avatar };
