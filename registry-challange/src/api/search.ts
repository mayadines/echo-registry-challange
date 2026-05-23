import { apiClient } from "@/api/client";
import type { SearchResponse } from "@/types/search";

export type { SearchResult, SearchResponse } from "@/types/search";

export async function searchRepositories(
  query: string,
  size = 25
): Promise<SearchResponse> {
  const { data } = await apiClient.get<SearchResponse>(
    "/api/search/v3/catalog/search",
    { params: { query, from: 0, size } }
  );
  return data;
}
