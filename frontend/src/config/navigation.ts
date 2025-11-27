import type { ElementType } from "react";
import { Box, Home, Package, PackagePlus, Users } from "lucide-react";

export type NavigationItem = {
  key: string;
  label: string;
  path: string;
  icon: ElementType;
  children?: NavigationItem[];
  showInSidebar?: boolean;
};

const entriesIngredientsChildren: NavigationItem[] = [
  {
    key: "entries-ingredients.dashboard",
    label: "Dashboard",
    path: "/entries-ingredients",
    icon: PackagePlus,
  },
  {
    key: "entries-ingredients.add",
    label: "Añadir ingrediente",
    path: "/entries-ingredients/add",
    icon: PackagePlus,
  },
  {
    key: "entries-ingredients.list",
    label: "Consultar ingredientes",
    path: "/entries-ingredients/list",
    icon: PackagePlus,
  },
];

const rawMaterialEntriesChildren: NavigationItem[] = [
  {
    key: "raw-material-entries.dashboard",
    label: "Resumen",
    path: "/raw-material-entries",
    icon: Box,
  },
];

export const navigationItems: NavigationItem[] = [
  {
    key: "home",
    label: "Inicio",
    path: "/",
    icon: Home,
  },
  {
    key: "users",
    label: "Usuarios",
    path: "/usuarios",
    icon: Users,
  },
  {
    key: "stock",
    label: "Stock",
    path: "/stock",
    icon: Package,
  },
  {
    key: "entries-ingredients",
    label: "Entrada de Ingredientes",
    path: "/entries-ingredients",
    icon: PackagePlus,
    children: entriesIngredientsChildren,
  },
  {
    key: "raw-material-entries",
    label: "Entrada de Materia Prima",
    path: "/raw-material-entries",
    icon: Box,
    children: rawMaterialEntriesChildren,
  },
];

const flattenNavigation = (items: NavigationItem[]): NavigationItem[] =>
  items.flatMap((item) => [item, ...(item.children ? flattenNavigation(item.children) : [])]);

export const navigationIndex = flattenNavigation(navigationItems).reduce(
  (acc, item) => {
    acc[item.key] = item;
    return acc;
  },
  {} as Record<string, NavigationItem>,
);

export type QuickAccessItem = NavigationItem & { description: string };

const quickAccessConfig: Array<[string, string]> = [
  ["users", "Crear, editar y asignar roles."],
  ["stock", "Consulta y gestión de existencias."],
  ["entries-ingredients", "Registrar y revisar entradas de ingredientes."],
];

export const quickAccessDefaults: QuickAccessItem[] = quickAccessConfig
  .map(([key, description]) => {
    const navItem = navigationIndex[key];
    return navItem ? { ...navItem, description } : null;
  })
  .filter(Boolean) as QuickAccessItem[];
