// src/features/entries/constants/entry-types.ts

export const ENTRY_TYPES = [
  { key: "ingredients", label: "Ingredientes" },
  { key: "raw", label: "Materias Primas" },
  { key: "others", label: "Otros" },
] as const;

export type EntryTabKey = (typeof ENTRY_TYPES)[number]["key"];
