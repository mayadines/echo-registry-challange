import { apiClient } from "@/api/client";
import type { RepoDetails, RepoTagsResponse } from "@/types/repository";

export type { RepoDetails, RepoTag, RepoTagsResponse } from "@/types/repository";

export async function getRepoDetails(
  namespace: string,
  name: string
): Promise<RepoDetails> {
  const { data } = await apiClient.get<RepoDetails>(
    `/v2/repositories/${namespace}/${name}/`
  );
  return data;
}

export async function getRepoTags(
  namespace: string,
  name: string,
  page = 1,
  pageSize = 25
): Promise<RepoTagsResponse> {
  const { data } = await apiClient.get<RepoTagsResponse>(
    `/v2/repositories/${namespace}/${name}/tags/`,
    { params: { page, page_size: pageSize } }
  );
  return data;
}
