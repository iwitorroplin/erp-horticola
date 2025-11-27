// src/features/entries/ingredients/components/NewIngredientEntryButton.tsx

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function NewIngredientEntryButton() {
  return (
    <Button>
      <Plus className="w-4 h-4 mr-2" />
      Nueva entrada
    </Button>
  );
}
