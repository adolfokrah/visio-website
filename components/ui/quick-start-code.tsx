import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";

export default function QuickStartCode({className}:{className?: string}) {
  return (
    <div className={cn("rounded-lg bg-dark-900 relative z-20 text-white flex gap-3 items-center w-max p-3", className)}>
      <pre>
        <code>
            <span className="text-primary">npx</span> create-visio-cms-app@latest
        </code>
      </pre>
      <Copy size={14} className="cursor-pointer" />
    </div>
  );
}