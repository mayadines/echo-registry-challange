import type { SearchResult } from "@/types/search";

export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export interface RepositoryCardProps {
  repo: SearchResult;
}

export interface SearchResultsProps {
  results: SearchResult[];
  total: number;
  query: string;
  isFetching: boolean;
  isError: boolean;
  error: string | null;
}
