interface EmptyStateProps {
  title: string;
  description?: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="text-center py-10 text-slate-500">
      <p className="text-lg font-medium">{title}</p>
      {description && <p className="text-sm mt-1">{description}</p>}
    </div>
  );
}
