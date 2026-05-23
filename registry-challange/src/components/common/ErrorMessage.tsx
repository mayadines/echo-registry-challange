interface ErrorMessageProps {
  title: string;
  message: string | null;
}

export function ErrorMessage({ title, message }: ErrorMessageProps) {
  return (
    <div className="max-w-md mx-auto px-4 py-4">
      <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        <span className="font-medium">{title} </span>
        {message}
      </div>
    </div>
  );
}
