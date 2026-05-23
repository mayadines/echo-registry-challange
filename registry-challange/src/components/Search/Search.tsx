import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchRepositories, PAGE_SIZE } from "@/api/search";
import { RegistryTitle } from "@/components/common";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";

export function Search() {
  const params = new URLSearchParams(window.location.search);

  const [searchQuery, setSearchQuery] = useState(() => params.get("q") ?? "");
  const [page, setPage] = useState(() => Number(params.get("page") ?? 0));

  const { data, isFetching, isError, error } = useQuery({
    queryKey: ["search", searchQuery, page],
    queryFn: () => searchRepositories(searchQuery, page),
    enabled: !!searchQuery,
  });

  const totalPages = data ? Math.ceil(data.total / PAGE_SIZE) : 0;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(0);
    const url = query ? `?q=${encodeURIComponent(query)}` : window.location.pathname;
    history.pushState(null, "", url);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    const url = `?q=${encodeURIComponent(searchQuery)}&page=${newPage}`;
    history.pushState(null, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!searchQuery) {
    return (
      <div className="flex flex-col items-center px-4 min-h-screen justify-center">
        <div className="text-center mb-8 space-y-4">
          <RegistryTitle />
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Search and browse Docker repositories, explore tags, sizes, and
            pull commands — all in one place.
          </p>
        </div>
        <SearchBar placeholder="Search Docker repositories..." onSearch={handleSearch} />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center px-4 pt-12 pb-8">
        <div className="text-center mb-8">
          <RegistryTitle size="sm" />
        </div>
        <SearchBar placeholder="Search Docker repositories..." onSearch={handleSearch} />
      </div>
      <SearchResults
        results={data?.results ?? []}
        total={data?.total ?? 0}
        query={searchQuery}
        isFetching={isFetching}
        isError={isError}
        error={error?.message ?? null}
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
