'use client';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { RenderRichText } from 'visio-cms';

export default function CodeSnippet({ codeLabel, code }: { codeLabel: string; code: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopyCode() {
    await navigator.clipboard.writeText(code);

    setCopied(() => {
      setTimeout(() => setCopied(false), 2000);
      return true;
    });
  }
  return (
    <div className="vs-my-2 vs-m-auto vs-max-w-[300px] vs-mb-5 vs-rounded-md vs-bg-slate-900  vs-text-white vs-px-4 vs-py-2 vs-flex vs-items-center vs-justify-between">
      <pre>
        <code>
          <RenderRichText htmlContent={codeLabel} />
        </code>
      </pre>
      {copied ? <Check size={18} /> : <Copy size={18} className="vs-cursor-pointer" onClick={handleCopyCode} />}
    </div>
  );
}
