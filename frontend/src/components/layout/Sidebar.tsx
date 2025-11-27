import type { ElementType } from "react";
import { NavLink } from "react-router-dom";
import { Home, LogIn, Package, Users, PackagePlus, Box } from "lucide-react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

interface NavItemConfig {
  path: string;
  label: string;
  icon: ElementType;
}

const navItems: NavItemConfig[] = [
  {
    path: "/",
    label: "Inicio",
    icon: Home,
  },
  {
    path: "/usuarios",
    label: "Usuarios",
    icon: Users,
  },
  {
    path: "/stock",
    label: "Stock",
    icon: Package,
  },
  {
    path: "/entries_ingredients",
    label: "Entrada de Ingredientes",
    icon: PackagePlus,
  },
  {
    path: "/emmpthy_page",
    label: "Entrada de Materia Prima",
    icon: PackagePlus,
  },
];

function NavItem({ path, label, icon: Icon }: NavItemConfig) {
  return (
    <NavLink
      to={path}
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
      <span>{label}</span>
    </NavLink>
  );
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={onClose}
          role="presentation"
          aria-hidden
        />
      )}

      <aside
        aria-label="Menú de navegación"
        className={`fixed top-0 left-0 z-50 w-70 bg-white border-r border-slate-200
          h-screen p-4 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <h2 className="text-xl font-semibold mb-4">Menú</h2>

        <nav className="space-y-2" aria-label="Secciones principales">
          {navItems.map((item) => (
            <NavItem key={item.path} {...item} />
          ))}
        </nav>
      </aside>
    </>
  );
}
