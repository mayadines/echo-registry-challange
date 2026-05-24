export interface RepoDetails {
  name: string;
  namespace: string;
  description: string;
  full_description: string | null;
  last_updated: string;
  star_count: number;
  pull_count: number;
  is_private: boolean;
}

export interface RepoTag {
  name: string;
  last_updated: string;
  full_size: number;
}

export interface RepoTagsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: RepoTag[];
}
