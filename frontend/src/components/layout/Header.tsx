import { Menu, Search } from "lucide-react";
import { NotificationPanel } from "./NotificationPanel";
import { UserMenu } from "./UserMenu";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="w-full bg-white shadow px-4 py-3 flex items-center justify-between">
      {/* LEFT: MENU + SEARCH */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 rounded hover:bg-slate-100 transition"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Buscador */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar..."
            className="pl-10 pr-4 py-2 rounded-md border border-slate-300 bg-slate-50 w-64 text-sm focus:ring-2 focus:ring-slate-300"
          />
        </div>
      </div>

      {/* RIGHT: NOTIFICATIONS + USER */}
      <div className="flex items-center gap-4">
        <UserMenu />
        <NotificationPanel />
      </div>
    </header>
  );
}
