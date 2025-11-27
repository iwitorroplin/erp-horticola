import { PageContainer } from "@/components/common/PageContainer";

export default function RawMaterialEntriesPage() {
  return (
    <PageContainer>
      <div className=" bg-slate-100 p-8">
        <div className="mx-auto space-y-8">
          {/* TITLE */}
          <header>
            <h1 className="text-3xl font-extrabold text-slate-800">
              Entradas de materia prima
            </h1>
            <p className="text-slate-600">
              Módulo placeholder para futuros flujos de materia prima.
            </p>
          </header>
        </div>
      </div>
    </PageContainer>
  );
}
