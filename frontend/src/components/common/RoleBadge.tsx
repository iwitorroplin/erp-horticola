import { Badge } from "@/components/ui/badge";
import {
  ROLE_LABELS,
  ROLE_COLORS,
  type UserRole,
} from "@/features/users/constants/roles";

export function RoleBadge({ role }: { role: UserRole }) {
  return (
    <Badge className={`${ROLE_COLORS[role]} font-semibold`}>
      {ROLE_LABELS[role]}
    </Badge>
  );
}
