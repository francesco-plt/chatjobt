import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyButton = ({ onClick, isLoading, letterData }) => {
  const [copied, setCopied] = useState(false);
  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="py-4">
      <CopyToClipboard text={letterData}>
        <button
          className="px-4 py-2 bg-slate-200 text-black rounded-md dark:text-white dark:bg-zinc-700 hover:bg-slate-300 dark:hover:bg-zinc-600"
          onClick={handleCopyClick}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default CopyButton;
