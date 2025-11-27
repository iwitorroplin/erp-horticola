import { PageContainer } from "@/components/common/PageContainer";

export default function EmpthyPage() {
  return (
    <PageContainer>
      <div className=" bg-slate-100 p-8">
        <div className="mx-auto space-y-8">
          {/* TITLE */}
          <header>
            <h1 className="text-3xl font-extrabold text-slate-800">
              Pagina en blanco para test
            </h1>
            <p className="text-slate-600">Panel de prueba</p>
          </header>
        </div>
      </div>
    </PageContainer>
  );
}
