import { Package, Users, FileText } from "lucide-react";
import { PageContainer } from "@/components/common/PageContainer";
import QuickAccessCard from "@/components/common/QuickAccessCard";
import SummaryCard from "@/components/common/SummaryCard";
import { quickAccessDefaults } from "@/config/navigation";

export default function HomePage() {
  return (
    <PageContainer>
      <div className=" bg-slate-100 p-8">
        <div className="mx-auto space-y-8">
          {/* TITLE */}
          <header>
            <h1 className="text-3xl font-extrabold text-slate-800">
              Bienvenido al ERP Hortícola
            </h1>
            <p className="text-slate-600">
              Panel principal con accesos rápidos y estado general.
            </p>
          </header>

          {/* SUMMARY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SummaryCard title="Usuarios registrados" value="12" icon={Users} />
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
              Accesos rápidos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickAccessDefaults.map(({ key, label, description, icon, path }) => (
                <QuickAccessCard
                  key={key}
                  title={label}
                  description={description}
                  icon={icon}
                  link={path}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
