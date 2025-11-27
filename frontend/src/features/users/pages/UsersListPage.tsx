import { useEffect, useState } from "react";

import { CardBase } from "@/components/common/CardBase";
import { EmptyState } from "@/components/common/EmptyState";
import PageLoader from "@/components/common/PageLoader";
import { RoleBadge } from "@/components/common/RoleBadge";
import { TableBase } from "@/components/common/TableBase";
import { Button } from "@/components/ui/button";

import type { UserRole } from "@/features/users/constants/roles";

const mockUsers = [
  { id: 1, name: "Iñigo", role: "admin" },
  { id: 2, name: "Laura", role: "operario" },
  { id: 3, name: "Carlos", role: "supervisor" },
];

export default function UsersListPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  const users = mockUsers;

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button>Añadir usuario</Button>
      </div>

      <CardBase>
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
    </div>
  );
}
