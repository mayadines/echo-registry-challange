import type { RepoDetails } from "@/types/repository";
import { formatDate } from "@/utils/format";

interface RepoHeaderProps {
  namespace: string;
  name: string;
  data: RepoDetails;
}

export function RepoHeader({ namespace, name, data }: RepoHeaderProps) {
  const displayName = `${namespace}/${name}`;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">{displayName}</h1>
      <p className="text-sm text-gray-400 mb-3">Owner: {data.namespace}</p>
      {data.description && (
        <p className="text-gray-600 text-sm mb-4">{data.description}</p>
      )}
      <p className="text-xs text-gray-400">
        Last updated: {formatDate(data.last_updated)}
      </p>
    </div>
  );
}
