import { Outlet } from "react-router-dom";

import { PageContainer } from "@/components/common/PageContainer";
import ModuleSubHeader from "@/components/layout/ModuleSubHeader";
import { navigationIndex } from "@/config/navigation";

const entriesNavigation =
  navigationIndex["entries-ingredients"]?.children ?? [];

export default function EntriesIngredientsLayout() {
  return (
    <PageContainer>
      <ModuleSubHeader
        title="Entrada de ingredientes"
        description="Accede rápidamente a las vistas internas del módulo."
        tabs={entriesNavigation}
      />

      <Outlet />
    </PageContainer>
  );
}
