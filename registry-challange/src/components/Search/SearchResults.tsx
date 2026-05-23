import type { SearchResultsProps } from "@/types/components";
import { Spinner, ErrorMessage, Pagination } from "@/components/common";
import { RepositoryCard } from "./RepositoryCard/RepositoryCard";

export function SearchResults({ results, total, query, isFetching, isError, error, page, totalPages, onPageChange }: SearchResultsProps) {
  if (isFetching) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage title="Search failed:" message={error} />;
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
      <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}
