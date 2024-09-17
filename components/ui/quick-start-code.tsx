import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import React from "react";
import Text from 'visio-cms-lib/Text'
export default function QuickStartCode({className, code, pageBlockId=""}:{className?: string, code: string, pageBlockId: string}) {
  const [copied, setCopied] = React.useState(false);

  const copyCode = () => {
    const strippedCode = code.replace(/<[^>]+>/g, '');
    navigator.clipboard.writeText(`npx ${strippedCode}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }
  
  return (
    <div className={cn("rounded-lg bg-dark-900 relative z-20 text-white flex gap-3 items-center w-max p-3", className)}>
      <pre>
        <code className="flex gap-2">
            <span className="text-primary">npx</span> 
            <Text propName="quickStartCode" pageBlockId={pageBlockId} defaultValue={code}/>
        </code>
      </pre>
      {copied ? <Check size={14}/>  : <Copy size={14} className="cursor-pointer" onClick={copyCode} />}
    </div>
  );
}