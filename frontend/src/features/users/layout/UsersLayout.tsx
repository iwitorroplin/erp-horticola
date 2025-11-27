import { Outlet } from "react-router-dom";

import { PageContainer } from "@/components/common/PageContainer";
import ModuleSubHeader from "@/components/layout/ModuleSubHeader";
import { navigationIndex } from "@/config/navigation";

const usersNavigation = navigationIndex["users"]?.children ?? [];

export default function UsersLayout() {
  return (
    <PageContainer>
      <ModuleSubHeader
        title="Usuarios"
        description="Gestiona usuarios, roles e invitaciones desde este contexto."
        tabs={usersNavigation}
      />

      <Outlet />
    </PageContainer>
  );
}
