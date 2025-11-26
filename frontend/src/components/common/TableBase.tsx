import type { ReactNode } from "react";

interface TableBaseProps {
  headers: string[];
  children: ReactNode;
}

export function TableBase({ headers, children }: TableBaseProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {headers.map((header) => (
              <th key={header} className="text-left p-2 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
          {children}
        </tbody>
      </table>
    </div>
  );
}
