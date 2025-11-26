// src/features/entries/ingredients/components/IngredientsTable.tsx

import { columns } from "./table/columns";
import { DataTable } from "./table/data-table";
import type { IngredientEntry } from "../types/ingredient-entry";

const mockData: IngredientEntry[] = [
  {
    id: "1",
    date: "2024-12-01",
    supplier: "Proveedor A",
    items: 12,
    status: "pendiente",
  },
  {
    id: "2",
    date: "2024-12-02",
    supplier: "Proveedor B",
    items: 8,
    status: "validado",
  },
];

export function IngredientsTable() {
  return <DataTable columns={columns} data={mockData} />;
}
