import type { ColumnDef } from "@tanstack/react-table";
import type { IngredientEntry } from "../../types/ingredient-entry";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<IngredientEntry>[] = [
  {
    accessorKey: "date",
    header: "Fecha",
  },
  {
    accessorKey: "supplier",
    header: "Proveedor",
  },
  {
    accessorKey: "items",
    header: "Unidades",
    cell: ({ row }) => {
      return <span className="font-medium">{row.original.items}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge
          className={
            status === "validado"
              ? "bg-green-600 hover:bg-green-700"
              : "bg-yellow-600 hover:bg-yellow-700"
          }
        >
          {status === "validado" ? "Validado" : "Pendiente"}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Acciones",
    cell: () => (
      <button className="text-blue-600 hover:underline text-sm">
        Ver detalle
      </button>
    ),
  },
];
