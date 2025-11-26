import { NavLink } from "react-router-dom";
import { Home, Users, Package, LogIn, CircleSlash } from "lucide-react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

// 🧱 Lógica (no se rompe nunca)
const navPaths = ["/", "/usuarios", "/stock", "/entries_ingredients"];

// 🎨 Estética (si algo falla → hay defaults)
const navMeta: Record<string, { label: string; icon: React.ElementType }> = {
  "/": { label: "Inicio", icon: Home },
  "/usuarios": { label: "Usuarios", icon: Users },
  "/stock": { label: "Stock", icon: Package },
  "/entries_ingredients": {
    label: "Entrada de Ingredientes",
    icon: LogIn,
  },
};

function NavItem({ to }: { to: string }) {
  const meta = navMeta[to];

  const Label = meta?.label ?? "Sin título";
  const Icon = meta?.icon ?? CircleSlash; // icono fallback

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
          isActive
            ? "bg-slate-200 text-slate-900 shadow-sm"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-800",
        ].join(" ")
      }
    >
      <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
      <span>{Label}</span>
    </NavLink>
  );
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 w-56 bg-white border-r border-slate-200
          h-screen p-4 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <h2 className="text-xl font-semibold mb-4">Menú</h2>

        <nav className="space-y-2">
          {navPaths.map((path) => (
            <NavItem key={path} to={path} />
          ))}
        </nav>
      </aside>
    </>
  );
}
