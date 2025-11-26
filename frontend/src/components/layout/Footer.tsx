import { APP_CONFIG } from "@/config/app";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full text-center py-3 text-sm text-slate-500 border-t bg-white">
      {APP_CONFIG.name} · v{APP_CONFIG.version} · © {year}
    </footer>
  );
}
