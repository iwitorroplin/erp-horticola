import NavItem from "./NavItem";
import { menuItems } from "./menuItems";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 w-56 bg-white border-r border-slate-200 h-screen p-4 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <h2 className="text-xl font-semibold mb-4">Menú</h2>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavItem key={item.to} to={item.to} icon={item.icon}>
              {item.label}
            </NavItem>
          ))}
        </nav>
      </aside>
    </>
  );
}
