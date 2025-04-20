import { useState } from "react";
import { toast } from "sonner";

export const useCopyToClipboard = () => {
  const [copyStatus, setCopyStatus] = useState(false);

  const copyToClipboard = (text: string, setToast: boolean = false) => {
    setCopyStatus(false);
    navigator.clipboard.writeText(text);
    setCopyStatus(true);
    setTimeout(() => {
      setCopyStatus(false);
    }, 4000);
    if (setToast) {
      toast("Copied to Clipboard!");
    }
  };

  return { copyToClipboard, copyStatus, setCopyStatus };
};
