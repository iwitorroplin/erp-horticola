import type { ReactNode } from "react";

interface CardBaseProps {
  children: ReactNode;
  className?: string;
}

export function CardBase({ children, className = "" }: CardBaseProps) {
  return (
    <div
      className={`bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4 ${className}`}
    >
      {children}
    </div>
  );
}
