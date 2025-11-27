// src/features/entries/components/EntryTabs.tsx

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ENTRY_TYPES } from "../constants/entry-types";
import type { EntryTabKey } from "../constants/entry-types";

interface EntryTabsProps {
  value: EntryTabKey;
  onChange: (value: EntryTabKey) => void;
}

export function EntryTabs({ value, onChange }: EntryTabsProps) {
  return (
    <Tabs value={value} onValueChange={(val) => onChange(val as EntryTabKey)}>
      <TabsList className="grid grid-cols-3 w-fit">
        {ENTRY_TYPES.map((tab) => (
          <TabsTrigger key={tab.key} value={tab.key}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
