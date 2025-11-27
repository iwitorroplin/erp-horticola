import { Outlet, NavLink } from "react-router-dom";
import { PageContainer } from "@/components/common/PageContainer";
import { navigationIndex } from "@/config/navigation";

const entriesNavigation =
  navigationIndex["entries-ingredients"]?.children ?? [];

export default function EntriesIngredientsLayout() {
  return (
    <PageContainer>
      <div className="flex gap-6 p-4">
        {/* NAV INTERNO */}
        <aside className="w-56 bg-white shadow rounded p-4 space-y-4">
          <nav className="flex flex-col gap-2">
            {entriesNavigation.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  `p-2 rounded ${
                    isActive ? "bg-slate-200" : "hover:bg-slate-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* CONTENIDO */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </PageContainer>
  );
}
