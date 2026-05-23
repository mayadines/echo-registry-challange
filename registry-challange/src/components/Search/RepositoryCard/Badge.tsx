export function Badge({ label, variant }: { label: string; variant: "blue" | "green" }) {
  const styles = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    green: "bg-green-50 text-green-600 border-green-100",
  };
  return (
    <span
      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${styles[variant]}`}
    >
      {label}
    </span>
  );
}
