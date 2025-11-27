// src/features/entries/ingredients/types/ingredient-entry.ts

export interface IngredientEntry {
  id: string;
  date: string;
  supplier: string;
  items: number;
  status: "pendiente" | "validado";
}
