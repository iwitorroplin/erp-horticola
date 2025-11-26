// src/features/entries/pages/EntriesPage.tsx

import { useState } from "react";
import { EntryTabs } from "../complonents/EntryTabs";
import type { EntryTabKey } from "../constants/entry-types";
import { PageContainer } from "@/components/common/PageContainer";

import { IngredientsTab } from "../ingredients/pages/IngredientsTab";

export default function EntriesPage() {
  const [tab, setTab] = useState<EntryTabKey>("ingredients");

  return (
    <PageContainer>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Entradas</h2>
        <p className="text-slate-600 mt-1">
          Gestiona las entradas de mercancía.
        </p>
      </div>

      {/* Tabs */}
      <EntryTabs value={tab} onChange={setTab} />

      {/* Contenido dinámico */}
      <div className="mt-8">
        {tab === "ingredients" && (
          <div className="text-slate-500">
            {tab === "ingredients" && <IngredientsTab />}
          </div>
        )}
        {tab === "raw" && (
          <div className="text-slate-500">
            Aquí irán las Entradas de Materias Primas.
          </div>
        )}
        {tab === "others" && (
          <div className="text-slate-500">
            Aquí irán Otros tipos de entrada.
          </div>
        )}
      </div>
    </PageContainer>
  );
}
