import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TextFormatterMode =
  | "normal"
  | "capitalize"
  | "titleize"
  | "lowercase"
  | "uppercase"
  | "slug"
  | "deslug"
  | "inverse";

export function textFormatter(
  text: string,
  mode: TextFormatterMode | TextFormatterMode[],
) {
  if (!Array.isArray(mode)) {
    return textFormatter(text, [mode]);
  }
  if (mode.length === 0) {
    return text;
  }
  const [currentMode, ...remainingModes] = mode;
  switch (currentMode) {
    case "capitalize":
      text = text.charAt(0).toUpperCase() + text.slice(1);
      break;
    case "titleize":
      return text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    case "lowercase":
      text = text.toLowerCase();
      break;
    case "uppercase":
      text = text.toUpperCase();
      break;
    case "slug":
      text = text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
      break;
    case "deslug":
      text = text
        .split("-")
        .map((segment) => segment.replace(/_/g, " "))
        .join(" ");
      break;
    case "inverse":
      text = text
        .split("")
        .map((char) =>
          char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
        )
        .join("");
      break;
    default:
      break;
  }
  return textFormatter(text, remainingModes);
}
