export interface Repository {
  name: string;
  namespace: string;
  description: string;
  type: string;
  pull_count: string;
  is_automated: boolean;
  is_official: boolean;
  is_trusted: boolean;
  last_pushed_at: string | null;
  last_pulled_at: string | null;
  archived: boolean;
}

export interface RatePlan {
  id: string;
  repositories: Repository[];
  operating_systems: Array<{ name: string; label: string }>;
  architectures: Array<{ name: string; label: string }>;
}

export interface SearchResult {
  id: string;
  name: string;
  slug: string;
  type: string;
  short_description: string;
  source: string;
  publisher: { id: string; name: string } | null;
  logo_url: { small?: string; large?: string } | null;
  star_count: number;
  categories: Array<{ name: string; slug: string }>;
  rate_plans: RatePlan[];
  archived: boolean;
  created_at: string;
  updated_at: string;
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
  next: string | null;
}
