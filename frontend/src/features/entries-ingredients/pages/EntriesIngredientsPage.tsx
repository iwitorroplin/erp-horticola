import { FileText, Package, Salad } from "lucide-react";
import { PageContainer } from "@/components/common/PageContainer";
import QuickAccessCard from "@/components/common/QuickAccessCard";
import SummaryCard from "@/components/common/SummaryCard";

export default function EntriesIngredientsPage() {
  return (
    <PageContainer>
      <div className=" bg-slate-100 p-8">
        <div className="mx-auto space-y-8">
          {/* TITLE */}
          <header>
            <h1 className="text-3xl font-extrabold text-slate-800">
              Entrada de Ingredientes
            </h1>
            <p className="text-slate-600">
              Panel de Entrada de ingredientes. SummaryCard de ejemplo para
              elementos posibles.san
            </p>
          </header>

          {/* SUMMARY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SummaryCard title="Ingredientes totales" value="12" icon={Salad} />
            <SummaryCard
              title="Productos en stock"
              value="358"
              icon={Package}
            />
            <SummaryCard title="Órdenes activas" value="7" icon={FileText} />
          </div>

          {/* QUICK ACCESS */}
          <div>
            <h2 className="text-xl font-bold text-slate-700 mb-4">
              Accesos rápidos a los modulos de entrada de ingredientes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <QuickAccessCard
                title="Añadir ingrediente"
                description="Registrar un nuevo ingrediente."
                icon={Salad}
                link="/entries-ingredients/add"
              />
              <QuickAccessCard
                title="Consultar ingredientes"
                description="Ver listado completo."
                icon={Package}
                link="/entries-ingredients/list"
              />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
