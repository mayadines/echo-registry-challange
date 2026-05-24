import { useQuery } from "@tanstack/react-query";
import { getPopularRepositories } from "@/api/search";
import { Spinner } from "@/components/common/Spinner";
import { ErrorMessage } from "@/components/common/ErrorMessage";
import { RepositoryCard } from "./RepositoryCard/RepositoryCard";

export function PopularRepositories() {
  const { data, isFetching, isError } = useQuery({
    queryKey: ["popular-repositories"],
    queryFn: () => getPopularRepositories(10),
    staleTime: 5 * 60 * 1000,
  });

  if (isFetching) return <Spinner />;
  if (isError) return <ErrorMessage title="Could not load popular repositories." message={null} />;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 pb-16 mt-12">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
        Popular Repositories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.results.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
