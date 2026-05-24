import type { RepoTag } from "@/types/repository";
import { TagRow } from "./TagRow";

interface TagsTableProps {
  tags: RepoTag[];
  namespace: string;
  name: string;
}

export function TagsTable({ tags, namespace, name }: TagsTableProps) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-xs text-gray-400 border-b border-gray-100">
          <th className="text-left px-6 py-3 font-medium">Tag</th>
          <th className="text-left px-6 py-3 font-medium">Last Updated</th>
          <th className="text-left px-6 py-3 font-medium">Size</th>
          <th className="px-6 py-3" />
        </tr>
      </thead>
      <tbody>
        {tags.map((tag) => (
          <TagRow key={tag.name} tag={tag} namespace={namespace} name={name} />
        ))}
      </tbody>
    </table>
  );
}
