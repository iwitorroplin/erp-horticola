import { NavLink } from "react-router-dom";

import type { NavigationItem } from "@/config/navigation";

import { PageHeader } from "../common/PageHeader";

interface ModuleSubHeaderProps {
  title: string;
  description?: string;
  tabs?: NavigationItem[];
}

export function ModuleSubHeader({
  title,
  description,
  tabs = [],
}: ModuleSubHeaderProps) {
  return (
    <div className="mb-6 border-b border-slate-200">
      <PageHeader title={title} description={description} />

      {tabs.length > 0 && (
        <nav className="flex gap-6 text-sm font-medium">
          {tabs.map((tab) => (
            <NavLink
              key={tab.key}
              to={tab.path}
              className={({ isActive }) =>
                `pb-2 border-b-2 transition-colors ${
                  isActive
                    ? "border-blue-600 text-blue-700"
                    : "border-transparent text-slate-600 hover:text-slate-800"
                }`
              }
              end
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
}

export default ModuleSubHeader;
