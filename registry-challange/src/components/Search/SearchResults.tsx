import type { SearchResultsProps } from "@/types/components";
import { RepositoryCard } from "./RepositoryCard/RepositoryCard";

export function SearchResults({ results, total, query, isFetching, isError, error }: SearchResultsProps) {
  if (isFetching) {
    return (
      <div className="flex justify-center py-16">
        <div className="w-8 h-8 rounded-full border-2 border-[#8a9a3a] border-t-transparent animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <span className="font-medium">Search failed: </span>
          {error}
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <p className="text-center text-gray-400 py-16 text-sm">
        No results found for &ldquo;{query}&rdquo;
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pb-16">
      <p className="text-sm text-gray-400 mb-4">
        {total.toLocaleString()} results for &ldquo;{query}&rdquo;
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {results.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
