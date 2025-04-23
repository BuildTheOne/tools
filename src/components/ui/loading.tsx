import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const loadingVariants = cva("", {
  variants: {
    variant: {
      default: "border-4 border-blue-500 border-t-transparent rounded-full",
    },
    size: {
      sm: "size-4",
      m: "size-6",
      l: "size-8",
      xl: "size-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "m",
  },
});

interface LoadingProps
  extends React.HTMLAttributes<Element>,
    VariantProps<typeof loadingVariants> {
  type: "text" | "spinner" | "ping";
}

function Loading({
  className,
  variant,
  size,
  type = "text",
  ...props
}: LoadingProps) {
  let loadingType = "";

  switch (type) {
    case "spinner":
      loadingType = "animate-spin";
      break;
    case "ping":
      loadingType = "animate-ping";
      break;
    default:
      break;
  }

  if (type !== "text") {
    return (
      <span
        className={cn(
          loadingVariants({ variant, size }),
          loadingType,
          "",
          className,
        )}
        {...props}
      />
    );
  }

  return <span>Loading...</span>;
}

export { Loading, loadingVariants, type LoadingProps };
