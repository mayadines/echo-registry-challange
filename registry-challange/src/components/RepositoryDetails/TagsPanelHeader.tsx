interface TagsPanelHeaderProps {
  count?: number;
}

export function TagsPanelHeader({ count }: TagsPanelHeaderProps) {
  return (
    <div className="px-6 py-4 border-b border-gray-100">
      <h2 className="font-semibold text-gray-800">Tags</h2>
      {count && (
        <p className="text-xs text-gray-400 mt-0.5">
          {count.toLocaleString()} tags total
        </p>
      )}
    </div>
  );
}
