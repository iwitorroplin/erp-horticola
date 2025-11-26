// src/features/entries/ingredients/pages/IngredientsTab.tsx

import { IngredientsFilters } from "../components/IngredientsFilters";
import { IngredientsTable } from "../../components/IngredientsTable";
import { NewIngredientEntryButton } from "../components/NewIngredientEntryButton";

export function IngredientsTab() {
  return (
    <div className="space-y-6">
      {/* Header interno */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Entradas de Ingredientes</h3>
        <NewIngredientEntryButton />
      </div>

      {/* Filtros */}
      <IngredientsFilters />

      {/* Tabla */}
      <IngredientsTable />
    </div>
  );
}
