import { apiClient } from "@/api/client";
import type { SearchResponse } from "@/types/search";

export type { SearchResult, SearchResponse } from "@/types/search";

export const PAGE_SIZE = 20;

export async function searchRepositories(
  query: string,
  page = 0
): Promise<SearchResponse> {
  const { data } = await apiClient.get<SearchResponse>(
    "/api/search/v3/catalog/search",
    { params: { query, from: page * PAGE_SIZE, size: PAGE_SIZE } }
  );
  return data;
}
