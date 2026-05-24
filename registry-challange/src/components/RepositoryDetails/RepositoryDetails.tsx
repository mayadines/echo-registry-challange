import { useQuery } from "@tanstack/react-query";
import { getRepoDetails } from "@/api/repository";
import { Spinner, ErrorMessage } from "@/components/common";
import { navigate } from "@/utils/navigate";
import { BackButton } from "./BackButton";
import { RepoHeader } from "./RepoHeader";
import { TagsPanel } from "./TagsPanel";

interface RepositoryDetailsProps {
  namespace: string;
  name: string;
  backQuery: string;
  backPage: string;
}

export function RepositoryDetails({
  namespace,
  name,
  backQuery,
  backPage,
}: RepositoryDetailsProps) {
  const { data, isFetching, isError, error } = useQuery({
    queryKey: ["repoDetails", namespace, name],
    queryFn: () => getRepoDetails(namespace, name),
  });

  const handleBack = () =>
    navigate(
      backQuery ? `?q=${encodeURIComponent(backQuery)}&page=${backPage}` : "/",
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <BackButton onClick={handleBack} />

      {isFetching && <Spinner />}
      {isError && (
        <ErrorMessage
          title="Failed to load repository:"
          message={error?.message ?? null}
        />
      )}
      {data && <RepoHeader namespace={namespace} name={name} data={data} />}

      <TagsPanel namespace={namespace} name={name} />
    </div>
  );
}
