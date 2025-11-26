import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  children: ReactNode;
}

export default function NavItem({ to, icon: Icon, children }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",

          // estilos según activo
          isActive
            ? "bg-slate-200 text-slate-900 shadow-sm"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-800",
        ].join(" ")
      }
    >
      <Icon
        className={`
          w-5 h-5 transition-transform duration-200
          group-hover:scale-110
        `}
      />

      <span className="transition-colors duration-200">{children}</span>
    </NavLink>
  );
}
