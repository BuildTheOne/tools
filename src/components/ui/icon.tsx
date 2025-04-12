import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { icons } from "lucide-react";
import React from "react";

const iconVariants = cva("", {
  variants: {
    variant: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      error: "",
    },
    size: {
      sm: "!h-4 !w-4",
      m: "!h-6 !w-6",
      l: "!h-8 !w-8",
      xl: "!h-10 !w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "m",
  },
});

interface IconProps
  extends React.HTMLAttributes<SVGSVGElement>,
    VariantProps<typeof iconVariants> {
  icon: keyof typeof icons;
}

export function Icon({ className, icon, size, variant, ...props }: IconProps) {
  const LucideIcon = icons[icon];

  if (!LucideIcon) {
    return null;
  }

  return (
    <LucideIcon
      className={cn(iconVariants({ variant, size }), className)}
      {...props}
    />
  );
}
