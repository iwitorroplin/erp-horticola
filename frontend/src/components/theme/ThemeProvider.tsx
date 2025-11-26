import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light" // ← modo por defecto
      enableSystem={false} // ← ignora el modo del SO
    >
      {children}
    </NextThemesProvider>
  );
}
