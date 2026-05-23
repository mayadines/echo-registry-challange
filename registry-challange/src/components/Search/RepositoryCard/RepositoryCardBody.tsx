import type { SearchResult } from "@/types/search";

interface RepositoryCardBodyProps {
  name: string;
  publisher: SearchResult["publisher"];
  description: string;
}

export function RepositoryCardBody({ name, publisher, description }: RepositoryCardBodyProps) {
  return (
    <div className="px-4 py-3 flex flex-col gap-1 flex-1">
      <h3 className="font-semibold text-gray-900 text-sm truncate">{name}</h3>
      <p className="text-xs text-gray-400 truncate">
        by {publisher?.name ?? "Docker"}
      </p>
      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mt-1">
        {description}
      </p>
    </div>
  );
}
