import QuickAccessCard from "@/components/common/QuickAccessCard";
import SummaryCard from "@/components/common/SummaryCard";

// iconos
import { FileText, Package, Salad } from "lucide-react";

export default function EntriesIngredientsDashboardPage() {
  return (
    <div className="space-y-8">
      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard title="Ingredientes totales" value="12" icon={Salad} />
        <SummaryCard title="Productos en stock" value="358" icon={Package} />
        <SummaryCard title="Órdenes activas" value="7" icon={FileText} />
      </div>

      {/* QUICK ACCESS */}
      <div>
        <h2 className="text-xl font-bold text-slate-700 mb-4">
          Accesos rápidos a los modulos de entrada de ingredientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <QuickAccessCard
            title="Añadir Ingrediente"
            description="Registrar un nuevo ingrediente."
            icon={Salad}
            link="/entries-ingredients/add"
          />

          <QuickAccessCard
            title="Consultar Ingredientes"
            description="Ver listado completo."
            icon={Package}
            link="/entries-ingredients/list"
          />
        </div>
      </div>
    </div>
  );
}
