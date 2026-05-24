import { apiClient } from "@/api/client";
import type { SearchResponse } from "@/types/search";

export type { SearchResult, SearchResponse } from "@/types/search";

export async function searchRepositories(
  query: string,
  page = 0,
  pageSize = 20
): Promise<SearchResponse> {
  const { data } = await apiClient.get<SearchResponse>(
    "/api/search/v3/catalog/search",
    { params: { query, from: page * pageSize, size: pageSize } }
  );
  return data;
}

export async function getPopularRepositories(count = 10): Promise<SearchResponse> {
  const { data } = await apiClient.get<SearchResponse>(
    "/api/search/v3/catalog/search",
    { params: { query: "", sort: "pull_count", order: "desc", from: 0, size: count } }
  );
  return data;
}
