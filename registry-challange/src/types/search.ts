export interface SearchResult {
  id: string;
  name: string;
  slug: string;
  type: string;
  description: string;
  short_description: string;
  source: string;
  publisher: { id: string; name: string } | null;
  logo_url: { small: string; large: string } | null;
  pull_count: string;
  star_count: number;
  categories: Array<{ name: string; slug: string }>;
  trusted_content: { sources: string[] } | null;
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
  next: string | null;
}
