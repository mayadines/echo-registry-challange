import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchRepositories } from "@/api/search";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";

export function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isFetching, isError, error } = useQuery({
    queryKey: ["search", searchQuery],
    queryFn: () => searchRepositories(searchQuery),
    enabled: !!searchQuery,
  });

  const hasSearched = !!searchQuery;

  return (
    <>
      <div
        className={`flex flex-col items-center px-4 transition-all ${
          hasSearched ? "pt-12 pb-8" : "min-h-screen justify-center"
        }`}
      >
        <div className="text-center mb-8 space-y-4">
          <h1
            className={`font-light text-gray-900 leading-tight transition-all ${
              hasSearched ? "text-3xl" : "text-5xl"
            }`}
          >
            Explore the Container{" "}
            <em className="text-[#8a9a3a] not-italic font-medium">Registry</em>
          </h1>
          {!hasSearched && (
            <p className="text-gray-500 text-base max-w-md mx-auto">
              Search and browse Docker repositories, explore tags, sizes, and
              pull commands — all in one place.
            </p>
          )}
        </div>

        <SearchBar
          placeholder="Search Docker repositories..."
          onSearch={setSearchQuery}
        />
      </div>

      {hasSearched && (
        <SearchResults
          results={data?.results ?? []}
          total={data?.total ?? 0}
          query={searchQuery}
          isFetching={isFetching}
          isError={isError}
          error={error?.message ?? null}
        />
      )}
    </>
  );
}
