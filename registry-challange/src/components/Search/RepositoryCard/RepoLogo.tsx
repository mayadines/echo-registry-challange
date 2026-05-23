export function RepoLogo({ name, url }: { name: string; url: string | undefined }) {
  if (url) {
    return (
      <img
        src={url}
        alt={`${name} logo`}
        className="w-full h-full object-contain p-1"
      />
    );
  }
  return (
    <span className="text-lg font-bold text-gray-400 uppercase">
      {name[0]}
    </span>
  );
}
