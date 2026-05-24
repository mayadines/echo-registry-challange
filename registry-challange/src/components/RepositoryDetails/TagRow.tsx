import { useEffect, useState } from "react";
import type { RepoTag } from "@/types/repository";
import { formatSize, formatDate, pullCommand } from "@/utils/format";

interface TagRowProps {
  tag: RepoTag;
  namespace: string;
  name: string;
}

export function TagRow({ tag, namespace, name }: TagRowProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(pullCommand(namespace, name, tag.name));
    setCopied(true);
  };

  return (
    <tr className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
      <td className="px-6 py-3 font-mono text-gray-800 text-xs">{tag.name}</td>
      <td className="px-6 py-3 text-gray-500 text-xs">{formatDate(tag.last_updated)}</td>
      <td className="px-6 py-3 text-gray-500 text-xs">{formatSize(tag.full_size)}</td>
      <td className="px-6 py-3 text-right">
        <button
          onClick={handleCopy}
          className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          {copied ? "Copied!" : "Copy Command"}
        </button>
      </td>
    </tr>
  );
}
