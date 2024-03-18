import { useState } from "react";

interface CopyToClipboardButtonProps {
  text: string;
}

const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({
  text,
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div
      className="opacity-0 absolute cursor-pointer top-0 left-0 font-extrabold text-[#f8fafc] p-2 transition-opacity duration-300 hover:opacity-100"
      onClick={copyToClipboard}
    >
      {copied ? "Copied" : text}
    </div>
  );
};
export default CopyToClipboardButton;
