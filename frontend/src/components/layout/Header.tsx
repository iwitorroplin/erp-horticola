import { Icons } from "@/assets/icons";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const MenuIcon = Icons.menu;

  return (
    <header className="w-full bg-white shadow px-4 py-3 flex items-center gap-4">
      <button onClick={onMenuClick} className="p-2 rounded hover:bg-slate-100">
        <MenuIcon className="w-6 h-6" />
      </button>
      <h1 className="text-lg font-semibold">ERP Hortícola</h1>
    </header>
  );
}
