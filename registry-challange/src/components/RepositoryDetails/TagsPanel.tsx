import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRepoTags } from "@/api/repository";
import { Spinner, ErrorMessage, Pagination } from "@/components/common";
import { TagsTable } from "./TagsTable";
import { TagsPanelHeader } from "./TagsPanelHeader";

interface TagsPanelProps {
  namespace: string;
  name: string;
}

const PAGE_SIZE = 25;

export function TagsPanel({ namespace, name }: TagsPanelProps) {
  const [page, setPage] = useState(0);

  const { data, isFetching, isError, error } = useQuery({
    queryKey: ["repoTags", namespace, name, page],
    queryFn: () => getRepoTags(namespace, name, page + 1, PAGE_SIZE),
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <TagsPanelHeader count={data?.count} />

      {isFetching && <Spinner />}
      {isError && (
        <div className="p-6">
          <ErrorMessage title="Failed to load tags:" message={error?.message ?? null} />
        </div>
      )}

      {data && (
        data.results.length > 0 ? (
          <>
            <TagsTable tags={data.results} namespace={namespace} name={name} />
            <Pagination
              page={page}
              total={data.count}
              pageSize={PAGE_SIZE}
              onPageChange={setPage}
            />
          </>
        ) : (
          <p className="text-center text-gray-400 py-8 text-sm">No tags found.</p>
        )
      )}
    </div>
  );
}
