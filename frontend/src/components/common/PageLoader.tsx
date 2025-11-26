import { Loader2 } from "lucide-react";

export default function PageLoader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-10 text-slate-600 dark:text-slate-300 animate-fade">
      {/* Spinner */}
      <Loader2 className="w-8 h-8 animate-spin" />

      {/* Texto */}
      <p className="text-sm font-medium">Cargando módulo…</p>
    </div>
  );
}
