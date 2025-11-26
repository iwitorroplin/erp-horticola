import { useEffect, useState } from "react";

import { PageContainer } from "@/components/common/PageContainer";
import { PageHeader } from "@/components/common/PageHeader";
import { CardBase } from "@/components/common/CardBase";
import { TableBase } from "@/components/common/TableBase";
import { EmptyState } from "@/components/common/EmptyState";
import { RoleBadge } from "@/components/common/RoleBadge";
import { Button } from "@/components/ui/button";

import type { UserRole } from "@/features/users/constants/roles";

import PageLoader from "@/components/common/PageLoader";

const mockUsers = [
  { id: 1, name: "Iñigo", role: "admin" },
  { id: 2, name: "Laura", role: "operario" },
  { id: 3, name: "Carlos", role: "supervisor" },
];

export default function UsersPage() {
  const [loading, setLoading] = useState(true);

  // Simular carga
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  // Eliminar simular carga en el futuro

  const users = mockUsers;

  return (
    <PageContainer>
      <PageHeader
        title="Usuarios"
        description="Gestión de usuarios, roles y permisos del sistema."
        actions={<Button>Añadir usuario</Button>}
      />

      <CardBase className="mt-4">
        {users.length === 0 ? (
          <EmptyState
            title="No hay usuarios"
            description="Cuando añadas usuarios aparecerán aquí."
          />
        ) : (
          <TableBase headers={["ID", "Nombre", "Rol"]}>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">
                  <RoleBadge role={user.role as UserRole} />
                </td>
              </tr>
            ))}
          </TableBase>
        )}
      </CardBase>
    </PageContainer>
  );
}
