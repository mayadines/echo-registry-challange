import type { RepositoryCardProps } from "@/types/components";
import { RepoLogo } from "./RepoLogo";
import { Badge } from "./Badge";
import { RepositoryCardBody } from "./RepositoryCardBody";
import { RepositoryCardFooter } from "./RepositoryCardFooter";

export function RepositoryCard({ repo }: RepositoryCardProps) {
  const firstRepo = repo.rate_plans?.[0]?.repositories?.[0];
  const isOfficial = repo.source === "store" || firstRepo?.is_official === true;
  const isVerified = repo.source === "verified_publisher";
  const pullCount = firstRepo?.pull_count ?? "";
  const description = repo.short_description || firstRepo?.description || "No description available.";

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer flex flex-col">
      <div className="bg-gray-50 px-4 pt-4 pb-3 flex items-start justify-between gap-2">
        <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
          <RepoLogo name={repo.name} url={repo.logo_url?.small} />
        </div>
        <div className="flex flex-wrap justify-end gap-1.5 pt-1">
          {isOfficial && <Badge label="OFFICIAL" variant="blue" />}
          {isVerified && <Badge label="VERIFIED" variant="green" />}
        </div>
      </div>

      <RepositoryCardBody
        name={repo.name}
        publisher={repo.publisher}
        description={description}
      />

      <RepositoryCardFooter
        pullCount={pullCount}
        starCount={repo.star_count}
      />
    </div>
  );
}
