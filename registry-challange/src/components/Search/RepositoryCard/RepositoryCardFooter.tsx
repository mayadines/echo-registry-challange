import { DownloadIcon } from "@/icons/DownloadIcon";
import { StarIcon } from "@/icons/StarIcon";

interface RepositoryCardFooterProps {
  pullCount: string;
  starCount: number;
}

export function RepositoryCardFooter({ pullCount, starCount }: RepositoryCardFooterProps) {
  return (
    <div className="px-4 pb-4 pt-2 flex items-center gap-4 text-xs text-gray-400 border-t border-gray-50">
      <div className="flex items-center gap-1.5">
        <DownloadIcon />
        <span>{pullCount || "—"}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <StarIcon />
        <span>{starCount?.toLocaleString() ?? "—"}</span>
      </div>
    </div>
  );
}
