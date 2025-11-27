import { Outlet } from "react-router-dom";

import { PageContainer } from "@/components/common/PageContainer";
import ModuleSubHeader from "@/components/layout/ModuleSubHeader";
import { navigationIndex } from "@/config/navigation";

const rawMaterialNavigation =
  navigationIndex["raw-material-entries"]?.children ?? [];

export default function RawMaterialEntriesLayout() {
  return (
    <PageContainer>
      <ModuleSubHeader
        title="Entradas de materia prima"
        description="Navega entre vistas internas del módulo sin salir del contexto."
        tabs={rawMaterialNavigation}
      />

      <Outlet />
    </PageContainer>
  );
}
