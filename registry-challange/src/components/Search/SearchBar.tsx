import { useCallback, useState, type SyntheticEvent } from "react";
import { SearchIcon } from "@/icons/SearchIcon";
import type { SearchBarProps } from "@/types/components";

export function SearchBar({
  placeholder = "Explore intelligent wellness...",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
    []
  );

  const handleSubmit = useCallback(
    (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSearch?.(query);
    },
    [onSearch, query]
  );

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex items-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg overflow-hidden pl-4 pr-1 py-1 w-full max-w-md"
    >
      <SearchIcon />

      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
      />

      <button
        type="submit"
        className="bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium rounded-full px-5 py-2 transition-colors cursor-pointer"
      >
        Discover
      </button>
    </form>
  );
}
