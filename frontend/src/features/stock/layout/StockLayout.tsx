import { Outlet } from "react-router-dom";

import { PageContainer } from "@/components/common/PageContainer";
import ModuleSubHeader from "@/components/layout/ModuleSubHeader";
import { navigationIndex } from "@/config/navigation";

const stockNavigation = navigationIndex["stock"]?.children ?? [];

export default function StockLayout() {
  return (
    <PageContainer>
      <ModuleSubHeader
        title="Stock"
        description="Contexto de inventario con accesos rápidos a pestañas internas."
        tabs={stockNavigation}
      />

      <Outlet />
    </PageContainer>
  );
}
