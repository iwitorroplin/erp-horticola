import { Outlet, NavLink } from "react-router-dom";
import { PageContainer } from "@/components/common/PageContainer";

export default function EntriesIngredientsLayout() {
  return (
    <PageContainer>
      <div className="flex gap-6 p-4">
        {/* NAV INTERNO */}
        <aside className="w-56 bg-white shadow rounded p-4 space-y-4">
          <nav className="flex flex-col gap-2">
            <NavLink
              to="/entries_ingredients"
              className={({ isActive }) =>
                `p-2 rounded ${
                  isActive ? "bg-slate-200" : "hover:bg-slate-100"
                }`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/entries_ingredients/add"
              className={({ isActive }) =>
                `p-2 rounded ${
                  isActive ? "bg-slate-200" : "hover:bg-slate-100"
                }`
              }
            >
              Añadir ingrediente
            </NavLink>

            <NavLink
              to="/entries_ingredients/list"
              className={({ isActive }) =>
                `p-2 rounded ${
                  isActive ? "bg-slate-200" : "hover:bg-slate-100"
                }`
              }
            >
              Consultar ingredientes
            </NavLink>
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
