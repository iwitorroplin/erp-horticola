export type UserRole = "admin" | "operario" | "supervisor";

export const ROLE_LABELS: Record<UserRole, string> = {
  admin: "Administrador",
  operario: "Operario",
  supervisor: "Supervisor",
};

export const ROLE_COLORS: Record<UserRole, string> = {
  admin: "bg-red-600 text-white",
  operario: "bg-blue-600 text-white",
  supervisor: "bg-green-600 text-white",
};
