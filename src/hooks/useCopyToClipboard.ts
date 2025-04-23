import { useState } from "react";
import { toast } from "sonner";

type CopyToClipboardProps = {
  setToast?: boolean;
};

export const useCopyToClipboard = () => {
  const [copyStatus, setCopyStatus] = useState(false);

  const copyToClipboard = (
    text: string,
    options: CopyToClipboardProps = {
      setToast: false,
    },
  ) => {
    setCopyStatus(false);
    navigator.clipboard.writeText(text);
    setCopyStatus(true);

    setTimeout(() => {
      setCopyStatus(false);
    }, 4000);

    if (options.setToast) {
      toast.success("Copied to Clipboard!");
    }
  };

  return { copyToClipboard, copyStatus, setCopyStatus };
};
