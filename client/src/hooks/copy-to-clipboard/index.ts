import { useState } from "react";

export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState<string>("");

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(""), 2000); // Reset after 2 sec
    } catch (error) {
      console.error("Failed to copy:", error);
      setCopied("");
    }
  };

  return { copied, copy };
};
