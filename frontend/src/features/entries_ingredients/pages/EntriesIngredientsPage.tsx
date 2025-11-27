import { PageContainer } from "@/components/common/PageContainer";
import QuickAccessCard from "../../../components/common/QuickAccessCard";
import SummaryCard from "../../../components/common/SummaryCard";

// iconos
import { Salad, Package, Users, FileText } from "lucide-react";

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
                title="Gestión de Usuarios"
                description="Crear, editar y asignar roles."
                icon={Users}
                link="/users"
              />
              <QuickAccessCard
                title="Stock"
                description="Consulta y gestión de existencias."
                icon={Package}
                link="/stock"
              />
              <QuickAccessCard
                title="Informes"
                description="Ver reportes almacenados."
                icon={FileText}
                link="/reports"
              />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
